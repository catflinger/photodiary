import { DiaryYear } from './diary-year';
import { DiaryMonth } from './diary-month';
import { DiaryDay } from './diary-day';

export class Diary {
    public years: DiaryYear[] = [];

    constructor(src?: any) {
        if (src) {
            if (src && src.years && Array.isArray(src.years)) {
                //read in the source
                src.years.forEach(y => {
                    this.years.push(new DiaryYear(y));
                });
            }
        }
    }

    public getYear(year: number): DiaryYear {
        return this.years.find(y => y.year === year);
    }

    public getDay(year: number, month: number, day: number): DiaryDay {
        let result: DiaryDay = null;

        this.years.forEach(y => {
            if (!result && y.year === year) {
                y.months.forEach(m => {
                    if (!result && m.month === month) {
                        m.weeks.forEach(w => {
                            w.days.forEach(d => {
                                if (!result && d.day === day && d.active) {
                                    result = d;
                                }
                            });
                        });
                    }
                });
            }
        });

        return result;
    }

    public getDayByDate(date: Date) : DiaryDay {
        return this.getDay(
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate()
        );
    }

    public nextDay(currentDay: DiaryDay) : DiaryDay {
        let result: DiaryDay = null;

        let today = currentDay.date;
        let tomorrow = new Date(today);

        while (tomorrow.getMonth() === today.getMonth())  {
            tomorrow.setDate(tomorrow.getDate() + 1);
            let day = this.getDayByDate(tomorrow);
            if (day.active && day.hasPhoto) {
                result = day;
                break;
            }
        }

        return result;
    }
}

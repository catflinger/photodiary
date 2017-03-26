import { DiaryYear } from './diary-year';
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
}

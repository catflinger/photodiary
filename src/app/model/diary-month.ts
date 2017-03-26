import { DiaryDay } from './diary-day';
import { DiaryWeek } from './diary-week';

export class DiaryMonth {
    public month: number;
    public name: string;
    public weeks: DiaryWeek[] = [];
    public hasPhotos: boolean;

    constructor(src: any) {
        if (src) {
            this.month = src.month;
            this.name = src.name;

            if (src.weeks && Array.isArray(src.weeks)) {
                src.weeks.forEach(week => this.weeks.push(new DiaryWeek(week)));
            }
            
            //TO DO: fix this, read from src
            this.hasPhotos = true;
        }
    }

    public getDay(day: number) : DiaryDay {
        this.weeks.forEach(w => {
            let d = w.getDay(day);
            if (d) {
                return d;
            }
        });

        return null;
    }

    public getDays() : DiaryDay[] {
        let days: DiaryDay[] = [];

        this.weeks.forEach(w => 
            w.days.forEach(d => {
                if (d.active) { 
                    days.push(d) 
                }
            })
        );

        return days;
    }
}

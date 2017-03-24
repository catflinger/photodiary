import { DiaryDay } from './diary-day';
import { DiaryWeek } from './diary-week';

export class DiaryMonth {
    public month: number;
    public name: string;
    public weeks: DiaryWeek[] = [];

    constructor(src: any) {
        if (src) {
            this.month = src.month;
            this.name = src.name;

            if (src.weeks && Array.isArray(src.weeks)) {
                src.weeks.forEach(week => this.weeks.push(week));
            }
        }
    }
}

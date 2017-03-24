import {DiaryDay} from './diary-day';

export class DiaryWeek {
    public days: DiaryDay[] = [];

    constructor(src: any) {
        if (src) {
            if (src.days && Array.isArray(src.days)) {
                src.days.forEach(day => this.days.push(new DiaryDay(day)));
            }
        }
    }
}

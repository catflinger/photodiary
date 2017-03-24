import {DiaryMonth} from './diary-month';

export class DiaryYear {
    public year: number;
    public caption: string;
    public months: DiaryMonth[] = [];
    
    constructor(src: any) {
        if (src) {
            this.year = src.year;
            this.caption = src.caption;
            
            if (src.months && Array.isArray(src.months)) {
                src.months.forEach(m => {
                    this.months.push(new DiaryMonth(m));
                });
            }
        }
    }

    public getMonth(month: number) : DiaryMonth {
        return this.months.find(m => m.month === month);
    }
}

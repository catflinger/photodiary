import {DiaryYear} from './diary-year';

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

    public getYear(year: number) : DiaryYear {
        return this.years.find(y => y.year === year);
    }
}

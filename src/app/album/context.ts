import { Diary } from '../model/diary';
import {DiaryYear} from '../model/diary-year';
import { DiaryMonth } from '../model/diary-month';
import { DiaryDay } from '../model/diary-day';

export class Context {
  public year: number = 2017;
  public month: number = 1;
  public day: number = 1;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    // public static fromRouteParams(params) : Context  {
    //         let year: number = +params['year'];
    //         let month: number = +params['month'];
    //         let day: number = +params['day'];

    //         return new Context(year, month, day);
    // };

    // public inContextD(obj: any): boolean {
    //     let result: boolean = false;

    //     //duck-typed object, see if has the attributes we need
    //     if (obj && obj.year && obj.month && obj.day) {
    //         result = obj.year === this.year &&
    //                 obj.month === this.month &&
    //                 obj.day === this.day; 
    //     }
    //     return result;
    // }
    
    // public inContextM(obj: any): boolean {
    //     let result: boolean = false;

    //     //duck-typed object, see if has the attributes we need
    //     if (obj && obj.year && obj.month) {
    //         result = obj.year === this.year &&
    //                 obj.month === this.month; 
    //     }
    //     return result;
    // }
    
    // public inYearContextY(obj: any): boolean {
    //     let result: boolean = false;

    //     //duck-typed object, see if has the attributes we need
    //     if (obj && obj.year) {
    //         result = obj.year === this.year; 
    //     }
    //     return result;
    // }
}
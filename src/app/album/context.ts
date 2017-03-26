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
}
import {DiaryPhoto} from './diary-photo';

export class DiaryDay {
    public day: number;     //day of month, eg 3
    public date: Date;      //date this day represents eg 3rd Jan 2017
    public name: string;    //name of day, eg Monday
    public active: boolean; //false if this date lies outside the containing month
                            //eg last day of previous month but still in the same 
                            //week as other days in this month
    public photo: DiaryPhoto;   //a photo if one exists or else null

    constructor(src: any) {
        if (src) {
            this.day = src.day;
            this.date = src.date;
            this.name = src.name;
            this.active = src.active;
            this.photo = new DiaryPhoto(src.photo);
        }
    }
    
    // public static Blank(year: number, month: number, day: number) : DiaryDay {
    //     let d: DiaryDay = new DiaryDay(null);
    //     d.day = day;
    //     d.month = month;
    //     d.year = year;
    //     d.caption = "";
    //     d.photo = new DiaryPhoto();
    //     return d;
    // }
}

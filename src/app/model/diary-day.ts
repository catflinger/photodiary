import {DiaryPhoto} from './diary-photo';

export class DiaryDay {
    public day: number;     //day of month, eg 3
    public date: Date;      //date this day represents eg 3rd Jan 2017
    public name: string;    //name of day, eg Monday
    public hasPhoto: boolean;   //true if there is a non-blank photo for this day
    public active: boolean; //false if this date lies outside the containing month
                            //eg last day of previous month but still in the same 
                            //week as other days in this month
    public photo: DiaryPhoto;   //a photo if one exists or else null

    constructor(src: any) {
        if (src) {
            this.day = src.day;
            this.name = src.name;
            this.active = src.active;
    
            if (src.date) {
                this.date = new Date(src.date);
            } else {
                this.date = new Date(2017, 1, 1);
            } 
               
            //TO DO: fix this!  make photo null in src and add blanks here
            this.hasPhoto = (src.photo && src.photo.large != 'large/blank.jpg');
            this.photo = new DiaryPhoto(src.photo);
        }
    }

    public getYear(): number {
        return this.date.getFullYear();
    }

    public getMonth(): number {
        return this.date.getMonth() + 1;
    }

    //this differs from this.day in that non-active days do not have day numbers.  This function returns 1 as a placeholder/default for items that require a day
    public getDay(): number {
        return this.date.getDay() + 1;
    }
}

export class DiaryPhoto {
    public caption: string;
    public large: string;
    public thumb: string;

    constructor(src?: any) {
        if (src) {
            let path: string = "/assets/dist/";

            this.caption = src.caption;
            this.large = path + src.large; 
            this.thumb = path + src.thumb; 
        }
    }
}

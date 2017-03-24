export class DiarySettings {
    public large: DiaryImageSetting = new DiaryImageSetting();
    public small: DiaryImageSetting= new DiaryImageSetting()
    public thumb: DiaryImageSetting= new DiaryImageSetting();
    
    constructor (src?: any) {
        if (src) {
            this.large = new DiaryImageSetting(src.large);
            this.small = new DiaryImageSetting(src.small);
            this.thumb = new DiaryImageSetting(src.thumb);
        }
    }
}

export class DiaryImageSetting {
    public width: number = 100;
    public height: number = 100;;
    public path: string = "";

    constructor (src?: any) {
        if (src) {
            this.width = src.width;
            this.height = src.height;
            this.path = src.path;
        }
    }
}

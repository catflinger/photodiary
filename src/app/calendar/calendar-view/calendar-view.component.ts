import { Component, OnInit } from '@angular/core';

import { DiaryService } from '../../shared/diary.service';
import { Diary } from '../../model/diary';
import { Utils } from '../../shared/utils';

@Component({
    selector: 'app-calendar-view',
    templateUrl: './calendar-view.component.html',
    styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit {

    private diary: Diary = null;
    private temp: string = "";

    constructor(private diaryService: DiaryService, private utils: Utils) {
        diaryService.getDiary()
            .subscribe(data => {
                //console.log("test data:" + JSON.stringify(data));
                this.diary = data;
                this.temp = JSON.stringify(this.diary);

                //remove selected text caused by some users double-clicking on links
                //rather than single-clicking
                utils.clearSelection();
            });
    }

    ngOnInit() {

    }

}

import { Component, OnInit } from '@angular/core';

import { DiaryService } from '../../shared/diary.service';
import { Diary } from '../../model/diary';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit {
    
    private diary: Diary = null;

    constructor(private diaryService: DiaryService) {
        diaryService.getDiary()
            .subscribe(data => {
                //console.log("test data:" + JSON.stringify(data));
                this.diary = data;
            });
    }
  ngOnInit() {
  }

}

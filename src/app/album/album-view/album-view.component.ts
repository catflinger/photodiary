import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Diary } from '../../model/diary';
import { DiaryMonth } from '../../model/diary-month';
import { DiaryDay } from '../../model/diary-day';
import { DiaryService } from '../../shared/diary.service';
//import { ContextService } from '../context.service';
import { Context } from '../context';

@Component({
    selector: 'app-album-view',
    templateUrl: './album-view.component.html',
    styleUrls: ['./album-view.component.css']
})

export class AlbumViewComponent implements OnInit {
    private diary: Diary;
    private day: DiaryDay;
    private nextDay: DiaryDay;
    private dc: Context;

    constructor(        
        private route: ActivatedRoute,
        //private contextService: ContextService, 
        private diaryService: DiaryService) {

        //get the diary and select the current day according to the route parameters
        route.params
            .map(params => {
                let year: number = +params['year'];
                let month: number = +params['month'];
                let day: number = +params['day'];
                return new Context(year, month, day);
            }).subscribe(context => {
            this.dc = context;
            
            this.diaryService.getDiary().subscribe(d => {
                this.diary = d;
                this.day = d.getDay(this.dc.year, this.dc.month, this.dc.day);
                this.nextDay = d.nextDay(this.day);
            });
        });
     }

    ngOnInit() {
    }

    public nextPhoto(): void {

    }

}

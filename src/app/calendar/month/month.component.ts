import { Component, OnInit, Input } from '@angular/core';
import { DiaryMonth } from '../../model/diary-month';

@Component({
    selector: 'app-month',
    templateUrl: './month.component.html',
    styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
    @Input() month: DiaryMonth;

    constructor() { }

    ngOnInit() {
    }

    getDayNames(): string[] {
        let result: string[] = [];
        
        for(let n=0; n < 7; n++) {
            result.push(this.month.weeks[0].days[n].name);
        } 

        return result;
    }
}

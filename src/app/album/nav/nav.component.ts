import { Component, OnInit, Input } from '@angular/core';
import { Diary } from '../../model/diary'
import { Context } from '../context';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    @Input() diary: Diary;
    @Input() dc: Context;

    constructor() {

    }

    ngOnInit() {
    }

}

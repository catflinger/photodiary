import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {ApiService} from './api.service'

import { Diary } from '../model/diary';

//TO DO: replace this with a REST service
//import { data } from './model/diary-test-data';

@Injectable()
export class DiaryService {

    constructor(private api: ApiService) { }

    public getDiary(): Observable<Diary> {
        //TO DO: this is a quick "get started"" implementation
        //TO DO: replace this with a REST service
        //TO DO: use Observable rather than Promise
        //return Promise.resolve(new Diary(data.simple));

        return this.api.getObservable()
            .map(res => new Diary(res.index));
    }

}

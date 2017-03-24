import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

import { Diary } from '../model/diary';

@Injectable()
export class DiaryService {

    constructor(private api: ApiService) { }

    public getDiary(): Observable<Diary> {
        return this.api.getObservable()
            .map(res => new Diary(res.index));
    }
}

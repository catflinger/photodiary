
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {ApiService} from './api.service'

import { DiarySettings } from '../model/diary-settings';

//TO DO: replace this with a REST service

@Injectable()
export class SettingsService {

    constructor(private api: ApiService) { }

    public getSettings(): Observable<DiarySettings> {
        return this.api.getObservable()
            .map(res => new DiarySettings(res.settings));
    }
}

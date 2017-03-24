import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {Http} from '@angular/http'

@Injectable()
export class ApiService {
    private observable: Observable<any>;

    constructor(private http: Http) { 
        this.observable = this.http.get('/assets/dist/diary.json')
            .map(res => res.json());
        
    }

    public getObservable(): Observable<any> {
        return this.observable;
    }
}

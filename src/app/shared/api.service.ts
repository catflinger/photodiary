import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

@Injectable()
export class ApiService {
    private observable: Observable<any>;

    constructor(private http: Http) { 
        var version = new Date().getSeconds();
        this.observable = this.http.get('/assets/dist/diary.json?x=' + version)
            .map(res => res.json());
    }

    public getObservable(): Observable<any> {
        return this.observable;
    }
}

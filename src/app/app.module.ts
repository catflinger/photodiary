import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app/app.component';
import { DiaryService } from './shared/diary.service';
import { ApiService } from './shared/api.service';
import { Utils } from './shared/utils';

import { CalendarViewComponent } from './calendar/calendar-view/calendar-view.component';
import { MonthComponent } from './calendar/month/month.component';

import { AlbumViewComponent } from './album/album-view/album-view.component';
import { NavComponent } from './album/nav/nav.component';

var routes: Route[] = [
    { path: 'calendar', component: CalendarViewComponent },
    { path: 'album/:year/:month/:day', component: AlbumViewComponent },
    {
        path: '',
        redirectTo: '/calendar',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/calendar'
    },
];

@NgModule({
    declarations: [
        AppComponent,
        CalendarViewComponent,
        MonthComponent,
        AlbumViewComponent,
        NavComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes, { useHash: true }),
        //NgbModule.forRoot()
    ],
    providers: [
        DiaryService,
        ApiService,
        Utils
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

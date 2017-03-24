import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app/app.component';
import { CalendarViewComponent } from './calendar/calendar-view/calendar-view.component';
import { AlbumViewComponent } from './album/album-view/album-view.component';
import { DiaryService } from './shared/diary.service';
import { ApiService } from './shared/api.service';

var routes: Route[] = [
    { path: 'calendar', component: CalendarViewComponent },
    { path: 'album/:year/:month/:day', component: AlbumViewComponent },
    {
        path: '',
        redirectTo: '/calendar',
        pathMatch: 'full'
    },
];

@NgModule({
    declarations: [
        AppComponent,
        CalendarViewComponent,
        AlbumViewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
        NgbModule.forRoot()
    ],
    providers: [
        DiaryService,
        ApiService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

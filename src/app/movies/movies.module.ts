import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntervalProducersWinListComponent } from './interval-producers-win-list/interval-producers-win-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesYearListComponent } from './movies-year-list/movies-year-list.component';
import { TopStudiosWinnerListComponent } from './top-studios-winner-list/top-studios-winner-list.component';
import { YearMultipleWinnerListComponent } from './year-multiple-winner-list/year-multiple-winner-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        DashboardComponent,
        IntervalProducersWinListComponent,
        MovieListComponent,
        TopStudiosWinnerListComponent,
        YearMultipleWinnerListComponent,
        MoviesYearListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MoviesRoutingModule,
        SharedModule,
        FontAwesomeModule
    ]
})
export class MoviesModule { }

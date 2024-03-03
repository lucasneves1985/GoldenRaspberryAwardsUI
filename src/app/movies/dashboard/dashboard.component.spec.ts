import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';

import { IntervalProducersWinListComponent } from '../interval-producers-win-list/interval-producers-win-list.component';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieService } from '../movie.service';
import { MoviesYearListComponent } from '../movies-year-list/movies-year-list.component';
import { TopStudiosWinnerListComponent } from '../top-studios-winner-list/top-studios-winner-list.component';
import { YearMultipleWinnerListComponent } from '../year-multiple-winner-list/year-multiple-winner-list.component';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';

//import { YearMultipleWinnerListComponent } from '../year-multiple-winner-list/year-multiple-winner-list.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule, FontAwesomeModule, FormsModule],
      declarations: [
        DashboardComponent,
        TopStudiosWinnerListComponent,
        YearMultipleWinnerListComponent,
        IntervalProducersWinListComponent,
        MovieListComponent,
        MoviesYearListComponent
      ],
      providers: [MovieService]
    });

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

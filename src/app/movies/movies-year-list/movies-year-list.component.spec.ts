import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MoviesYearListComponent } from './movies-year-list.component';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { of } from 'rxjs';

describe('MoviesYearListComponent', () => {
  let component: MoviesYearListComponent;
  let fixture: ComponentFixture<MoviesYearListComponent>;
  let service: any;
  let moviesMock = [
    {
      id: 96,
      year: 1998,
      title: "An Alan Smithee Film: Burn Hollywood Burn",
      studios: [
        "Hollywood Pictures"
      ],
      producers: [
        "Ben Myron",
        "Joe Eszterhas"
      ],
      winner: true
    }
  ]
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule, FormsModule, HttpClientTestingModule, SharedModule],
      declarations: [MoviesYearListComponent],
      providers: [MovieService]
    });
    fixture = TestBed.createComponent(MoviesYearListComponent);
    service = TestBed.inject(MovieService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should get movie winner in the year', () => {
    spyOn(service, "getMovieWinnerByYear").and.callFake(
      () => of(moviesMock)
    )
    component.getMovieWinnerByYear();

    expect(component.movieWinnerByYear).toBe(moviesMock);
    expect(component.movieWinnerByYear.length).toBe(1);
  });
});

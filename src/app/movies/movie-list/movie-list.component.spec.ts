import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieService } from '../movie.service';
import { MoviesModule } from '../movies.module';
import { of } from 'rxjs';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let service: any;

const moviesMock = { content: [{
      id: 20,
      year: 1982,
      title: "The Pirate Movie",
      studios: [
          "20th Century Fox"
      ],
      producers: [
          "David Joseph"
      ],
      winner: false
  }], number: 1, last: true, totalPages: 1 };


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MoviesModule, HttpClientTestingModule],
      declarations: [MovieListComponent],
      providers: [MovieService, MovieListComponent]
    });
    fixture = TestBed.createComponent(MovieListComponent);
    service = TestBed.inject(MovieService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return data', () => {
    spyOn(service, 'getMovies' ).and.callFake(() => {
      return of(moviesMock)
    })
    component.getMovies(0);
    expect(component.movies).toBe(moviesMock.content);
    expect(component.movies.length).toBeGreaterThan(0);
    expect(component.pageable).toBeDefined();
  });


});

import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MaxMinIntervalOfProducers } from './model/MaxMinIntervalOfProducers';
import { Movies } from './model/Movies';

describe('MovieServiceService', () => {
  let service: MovieService;
  let httpTestingController : HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });
    service = TestBed.inject(MovieService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should have data on movies', () => {

    service.getMovies('?page=0&size=20').subscribe(ymw => {
      expect(ymw.content.length).toBeGreaterThan(0);

    });
    const req = httpTestingController.expectOne(`${service.API_URL}?page=0&size=20`);
    expect(req.request.method).toEqual('GET');

  });

  it('should have data on years with multiple winners', () => {

    service.getYearMultipleWinners().subscribe(ymw => {
      expect(ymw.years.length).toBeGreaterThan(0);
    });
    const req = httpTestingController.expectOne(`${service.API_URL}?projection=years-with-multiple-winners`);
    expect(req.request.method).toEqual('GET');

  });

  it('should have data on studios with winners', () => {

    service.getStudiosWinCount().subscribe(ymw => {
      expect(ymw.studios.length).toBeGreaterThan(0);
    });
    const req = httpTestingController.expectOne(`${service.API_URL}?projection=studios-with-win-count`);
    expect(req.request.method).toEqual('GET');

  });

  it('should have data on producer with maximum and minimal winner', () => {

    service.getMaxMinIntevalOfProducers().subscribe(ymw => {
      expect(ymw).toBeInstanceOf(MaxMinIntervalOfProducers);
    });
    const req = httpTestingController.expectOne(`${service.API_URL}?projection=max-min-win-interval-for-producers`);
    expect(req.request.method).toEqual('GET');

  });

  it('should have data about movies by year', () => {

    service.getMovieWinnerByYear(2018).subscribe(ymw => {
      expect(ymw).toBeGreaterThan(0);;
    });
    const req = httpTestingController.expectOne(`${service.API_URL}?winner=true&year=2018`);
    expect(req.request.method).toEqual('GET');

  });





  /*
  getMovies
getYearMultipleWinners
getStudiosWinCount
getMaxMinIntevalOfProducers
getMoviesByYear*/

});

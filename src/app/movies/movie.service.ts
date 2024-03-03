import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MaxMinIntervalOfProducers } from './model/MaxMinIntervalOfProducers';
import { Movies as Movies } from './model/Movies';
import { StudiosWinCount } from './model/StudiosWinCount';
import { YearMultipleWinners } from './model/YearMultipleWinners';
import { MoviesPageable } from './model/MoviesPageable';


/**
 * Movie module service class
 */
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  API_URL: string = "https://tools.texoit.com/backend-java/api/movies";

  constructor(private http: HttpClient) { }

  /**
   * Get movies with filter
   * @param params String with params about page, size, winner and year
   * @returns Array with Observable of Movie
   */
  getMovies(params: string): Observable<MoviesPageable> {
    return this.http.get<MoviesPageable>(`${this.API_URL}${params}`);
  }


  /**
   * Get movies by year
   * @param year Number with filter of year
   * @returns Array with Observable of Movies
   */
  getMovieWinnerByYear(year: number): Observable<Movies[]> {
    return this.http.get<Movies[]>(`${this.API_URL}?winner=true&year=${year}`);
  }

  /**
   * Get years with multiple winners
   * @returns Years with multiple winners
   */
  getYearMultipleWinners(): Observable<YearMultipleWinners> {
    return this.http.get<YearMultipleWinners>(`${this.API_URL}?projection=years-with-multiple-winners`);
  }

  /**
   * Get Studios with Winner and number of wins
   * @returns Array with Studios and Winners count
   */
  getStudiosWinCount(): Observable<StudiosWinCount> {
    return this.http.get<StudiosWinCount>(`${this.API_URL}?projection=studios-with-win-count`);
  }

  /**
   * Get Producers with maximum and minimal number of win
   * @returns Array with Producers with maximum and minimal number of win
   */
  getMaxMinIntevalOfProducers(): Observable<MaxMinIntervalOfProducers> {
    return this.http.get<MaxMinIntervalOfProducers>(`${this.API_URL}?projection=max-min-win-interval-for-producers`);
  }




}

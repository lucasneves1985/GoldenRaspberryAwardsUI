import { Component } from '@angular/core';
import { faCaretLeft, faCaretRight, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { MovieService } from '../movie.service';
import { Movies } from '../model/Movies';
import { take } from 'rxjs';


/**
 * Componente that show movies data, are possible two types of filter for year and winner (Yes / No)
 */
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  /**@ignore */
  faCaretLeft = faCaretLeft;
  /**@ignore */
  faCaretRight = faCaretRight;
  /**@ignore */
  faStepBackward = faStepBackward;
  /**@ignore */
  faStepForward = faStepForward;

  filterWinner = "";
  filterByYear = "";
  movies: Movies[] = [];
  pageable: any

  constructor(private movieService: MovieService){
    this.getMovies(0);
  }

  /**
   * Call service to get list movies that can to filter for year and winner or not
   * @param page Page number for search in the API, is necessary because this a pageable endpoint
   */
  getMovies(page: number) {
    let params = "";
    params += `?page=${page}`
    params += "&size=20"
    params += +this.filterByYear > 0 ? `&year=${this.filterByYear}` : '';
    params += this.filterWinner != "" ? `&winner=${this.filterWinner}` : '';
    this.movieService.getMovies(params).pipe(take(1)).subscribe(
      dados => {
        this.movies = dados.content
        this.pageable = {
          index: dados.number,
          page: dados.number +1,
          last: dados.last,
          numberTotalPages: dados.totalPages,
          totalPages: Array(dados.totalPages).fill(0)
        }
      }
    )
  }

}

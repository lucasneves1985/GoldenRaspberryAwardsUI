import { MovieService } from './../movie.service';
import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { take } from 'rxjs';
import { ColumnTable } from 'src/app/shared/model/ColumnsTable';
import { Movies } from '../model/Movies';


/**
 * Component that show table with movies by year and input for filter the data
 */
@Component({
  selector: 'app-movies-year-list',
  templateUrl: './movies-year-list.component.html',
  styleUrls: ['./movies-year-list.component.css']
})
export class MoviesYearListComponent {
  faSearch = faSearch;
  filter: string = "";
  movieWinnerByYear: Movies[] = [];

   /**
   * Variable with the columns that will be shown in the table
   */
  columns: ColumnTable[] = [
    {title: "Id", value: "id"},
    {title: "Year", value: "year"},
    {title: "Title", value: "title"}
  ]


  constructor(private movieService: MovieService) {
    this.getMovieWinnerByYear();
  }

  /**
   * Call service to get the winner movie by year
   */
  getMovieWinnerByYear() {
    this.movieService.getMovieWinnerByYear(+this.filter).pipe(take(1)).subscribe(
      dados => {
        this.movieWinnerByYear = dados
      },

      error => console.error(error)
    )
  }
}

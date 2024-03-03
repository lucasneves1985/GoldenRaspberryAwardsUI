import { Component } from '@angular/core';
import { take } from 'rxjs';
import { ColumnTable } from 'src/app/shared/model/ColumnsTable';

import { YearMultipleWinners } from '../model/YearMultipleWinners';
import { MovieService } from '../movie.service';

/**
 * Component that show table with data about years with multiple winners
 */
@Component({
  selector: 'app-year-multiple-winner-list',
  templateUrl: './year-multiple-winner-list.component.html'
})
export class YearMultipleWinnerListComponent {
  yearMultipleWinners: YearMultipleWinners = new YearMultipleWinners();

  /**
   * Variable with the columns that will be shown in the table
   */
  columns: ColumnTable[] = [
    {title: "Year", value: "year"},
    {title: "Win Count", value: "winnerCount"},
  ]

  constructor(private movieService: MovieService) {
    this.getYearMultipleWinners();

  }

  /**
   * Call service to get years with multiple winners
   */
  getYearMultipleWinners() {
    this.movieService.getYearMultipleWinners().pipe(take(1)).subscribe(
      dados => {

        this.yearMultipleWinners = dados
      },
      error => console.error(error)
    )
  }

}

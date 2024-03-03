import { MovieService } from './../movie.service';
import { Component } from '@angular/core';
import { take } from 'rxjs';
import { ColumnTable } from 'src/app/shared/model/ColumnsTable';
import { MaxMinIntervalOfProducers } from '../model/MaxMinIntervalOfProducers';

@Component({
  selector: 'app-interval-producers-win-list',
  templateUrl: './interval-producers-win-list.component.html',
})
export class IntervalProducersWinListComponent {
  maxMinIntervalOfProducers: MaxMinIntervalOfProducers = new MaxMinIntervalOfProducers();

  /**
   * Variable with the columns that will be shown in the table
   */
  columns: ColumnTable[] = [
    {title: "Producer", value: "producer"},
    {title: "Interval", value: "interval"},
    {title: "Previous Year", value: "previousWin"},
    {title: "Following Year", value: "followingWin"},
  ]
  
  constructor(private movieService: MovieService) {
    this.getMaxMinIntervalOfProducers();

  }

  /**
   * Call service to get years with multiple winners
   */
  getMaxMinIntervalOfProducers() {
    this.movieService.getMaxMinIntevalOfProducers().pipe(take(1)).subscribe(
      dados => {
        this.maxMinIntervalOfProducers = dados;
      },
      error => console.error(error)            
    )
  }
}

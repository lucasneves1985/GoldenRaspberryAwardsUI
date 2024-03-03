import { Component } from '@angular/core';
import { take } from 'rxjs';
import { ColumnTable } from 'src/app/shared/model/ColumnsTable';

import { WinCount } from '../model/StudiosWinCount';
import { MovieService } from '../movie.service';

/**
 * Component that show table with data of top 3 studios with more win
 */
@Component({
  selector: 'app-top-studios-winner-list',
  templateUrl: './top-studios-winner-list.component.html',
})
export class TopStudiosWinnerListComponent {
  winCount: WinCount[] = [];

  /**
   * Variable with the columns that will be shown in the table
   */
  columns: ColumnTable[] = [
    {title: "Name", value: "name"},
    {title: "Win Count", value: "winCount"},
  ]

  constructor(private movieService: MovieService) {
    this.getTopStudiosWinner();

  }

  /**
   * Call service to get studios with winner and filter the top 3
   */
  getTopStudiosWinner() {
    this.movieService.getStudiosWinCount().pipe(take(1)).subscribe(
      dados => {
        this.winCount = dados.studios.sort((a, b) => b.winCount - a.winCount).slice(0,3);
      },
      error => console.error(error)
    )
  }
}

import { Component, Input } from '@angular/core';
import { ColumnTable } from '../model/ColumnsTable';


/**
 * Component that sets up a customized table with definitions for use in the system
 */
@Component({
  selector: 'gra-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.css']
})
export class SimpleTableComponent {
  /**
   * List with objects that contain information about the title and value of the table columns
   */
  @Input() columns: ColumnTable[] = [];

  /**
   * Data that makes up the table
   */
  @Input() dataList: any;

}

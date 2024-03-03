import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SimpleTableComponent } from './table/simple-table.component';


@NgModule({
  declarations: [SimpleTableComponent],
  imports: [
    CommonModule
  ],
  exports: [SimpleTableComponent]
})
export class SharedModule { }

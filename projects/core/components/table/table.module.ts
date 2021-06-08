import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableHeadComponent } from './table-head/table-head.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { TableCellComponent } from './table-cell/table-cell.component';
import { TableRowComponent } from './table-row/table-row.component';

@NgModule({
  declarations: [
    TableComponent,
    TableHeadComponent,
    TableBodyComponent,
    TablePaginationComponent,
    TableCellComponent,
    TableRowComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    TableHeadComponent,
    TableBodyComponent,
    TablePaginationComponent,
    TableCellComponent,
    TableRowComponent,
  ]
})
export class TableModule { }

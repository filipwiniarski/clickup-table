import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableHeadComponent } from './table-head/table-head.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { TableCellComponent } from './table-cell/table-cell.component';
import { TableRowComponent } from './table-row/table-row.component';
import { TableCellHeaderComponent } from './table-cell-header/table-cell-header.component';
import { TableResizeDragDirective } from './table-resize-drag/table-resize-drag.directive';
import { TableDataDirective } from './table-data/table-data.directive';
import { MapperPipe } from './pipes/mapper.pipe';
import {DragDropModule} from '@angular/cdk/drag-drop'

@NgModule({
  declarations: [
    TableComponent,
    TableHeadComponent,
    TableBodyComponent,
    TablePaginationComponent,
    TableCellComponent,
    TableRowComponent,
    TableCellHeaderComponent,
    TableResizeDragDirective,
    TableDataDirective,
    MapperPipe,
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    TableComponent,
    TableHeadComponent,
    TableBodyComponent,
    TablePaginationComponent,
    TableCellComponent,
    TableRowComponent,
    TableCellHeaderComponent,
    TableResizeDragDirective,
    TableDataDirective,
  ]
})
export class TableModule { }

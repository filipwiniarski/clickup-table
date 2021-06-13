import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableHeadComponent } from './table-head/table-head.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { TableCellComponent } from './table-cell/table-cell.component';
import { TableRowComponent } from './table-row/table-row.component';
import { TableCellHeaderComponent } from './table-cell-header/table-cell-header.component';
import { TableDataDirective } from './table-data/table-data.directive';
import { MapperPipe } from './pipes/mapper.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  TableComponent,
  TableHeadComponent,
  TableBodyComponent,
  TablePaginationComponent,
  TableCellComponent,
  TableRowComponent,
  TableCellHeaderComponent,
  TableDataDirective,
  MapperPipe,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, DragDropModule, FormsModule, ReactiveFormsModule],
  exports: [components],
})
export class TableModule {}

import {AfterViewInit, Component, QueryList} from '@angular/core'
import {TableCellComponent} from '../table-cell/table-cell.component'
import {TableComponent} from '../table.component'

@Component({
  template: '',
})
export abstract class TableCellsWrapperComponent implements AfterViewInit {
  cells: QueryList<TableCellComponent> | undefined;

  readonly tableComponent!: TableComponent;

  get cellsList(): TableCellComponent[] {
    return Array.from(this.cells ?? []);
  }

  ngAfterViewInit() {
    this.cellsList.forEach((cell, index) => cell.setColumn(this.tableComponent.columns[index]));
  }
}

import {AfterViewInit, Component, HostBinding, QueryList} from '@angular/core'
import {TableCellComponent} from '../table-cell/table-cell.component'
import {TableComponent} from '../table.component'

@Component({
  template: '',
})
export abstract class TableCellsWrapperComponent<T> implements AfterViewInit {
  @HostBinding('class')
  className = 'cu-table-cells-wrapper';

  cells: QueryList<TableCellComponent<T>> | undefined;

  headCells: QueryList<TableCellComponent<T>> | undefined;

  readonly tableComponent!: TableComponent<T>;

  get cellsList(): TableCellComponent<T>[] {
    return Array.from(this.cells ?? []).concat(Array.from(this.headCells ?? []));
  }

  ngAfterViewInit() {
    this.cellsList.forEach((cell, index) => cell.setColumn(
        this.tableComponent.columns[index] as keyof T
      )
    );
  }
}

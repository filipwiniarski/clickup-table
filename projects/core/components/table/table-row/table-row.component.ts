import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef,
  HostBinding,
  Inject,
  QueryList,
} from '@angular/core';
import { TableComponent } from '../table.component';
import { TableCellsWrapperComponent } from '../table-cells-wrapper/table-cells-wrapper.component';
import { TableCellComponent } from '../table-cell/table-cell.component';
import { TableCellHeaderComponent } from '../table-cell-header/table-cell-header.component';

@Component({
  selector: 'cu-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableRowComponent<T> extends TableCellsWrapperComponent<T> {
  @HostBinding('class')
  className = 'cu-table-row';

  @ContentChildren(forwardRef(() => TableCellComponent)) cells:
    | QueryList<TableCellComponent<T>>
    | undefined;

  @ContentChildren(forwardRef(() => TableCellHeaderComponent)) headCells:
    | QueryList<TableCellHeaderComponent<T>>
    | undefined;

  constructor(
    @Inject(forwardRef(() => TableComponent))
    readonly tableComponent: TableComponent<T>
  ) {
    super();
  }
}

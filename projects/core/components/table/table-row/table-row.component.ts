import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, ContentChildren,
  Inject, QueryList
} from '@angular/core'
import {TableComponent} from '../table.component'
import {TableCellsWrapperComponent} from '../table-cells-wrapper/table-cells-wrapper.component'
import {TableCellComponent} from '../table-cell/table-cell.component'

@Component({
  selector: 'cu-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableRowComponent extends TableCellsWrapperComponent {
  @ContentChildren(TableCellComponent) cells: QueryList<TableCellComponent> | undefined;

  constructor(
    @Inject(TableComponent) readonly tableComponent: TableComponent
  ) {
    super();
  }
}

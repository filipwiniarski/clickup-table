import {ChangeDetectionStrategy, Component, ContentChildren, Inject, QueryList} from '@angular/core'
import {TableCellsWrapperComponent} from '../table-cells-wrapper/table-cells-wrapper.component'
import {TableComponent} from '../table.component'
import {TableCellComponent} from '../table-cell/table-cell.component'

@Component({
  selector: 'cu-table-head',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableHeadComponent extends TableCellsWrapperComponent {
  @ContentChildren(TableCellComponent) cells: QueryList<TableCellComponent> | undefined;

  constructor(
    @Inject(TableComponent) readonly tableComponent: TableComponent
  ) {
    super();
  }
}

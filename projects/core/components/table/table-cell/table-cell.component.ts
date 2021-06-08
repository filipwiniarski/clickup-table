import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Inject,
  Input,
  Optional
} from '@angular/core'
import {TableComponent} from '../table.component'
import {TableHeadComponent} from '../table-head/table-head.component'
import {TableRowComponent} from '../table-row/table-row.component'

type Sort = 'string' | 'number' | 'date'

@Component({
  selector: 'cu-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableCellComponent {
  column!: string;

  @HostBinding('class.head-cell')
  get isHeadCell() {
    return !!this.tableHeadComponent;
  }

  get isRowCell() {
    return !!this.tableRowComponent;
  }

  @Input()
  sort: Sort | undefined;

  @Input()
  sortFn: ((a: any, b: any) => boolean) | undefined;

  constructor(
    @Inject(TableComponent) readonly tableComponent: TableComponent,
    @Optional() @Inject(TableHeadComponent) readonly tableHeadComponent: TableHeadComponent,
    @Optional() @Inject(TableRowComponent) readonly tableRowComponent: TableRowComponent,
    @Inject(ChangeDetectorRef) readonly changeDetectorRef: ChangeDetectorRef,
  ) {}

  setColumn(value: string) {
    this.column = value;
    this.changeDetectorRef.detectChanges();
  }
}

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Inject,
  Input,
  Optional, TemplateRef
} from '@angular/core'
import {TableComponent} from '../table.component'
import {TableHeadComponent} from '../table-head/table-head.component'
import {TableRowComponent} from '../table-row/table-row.component'

@Component({
  selector: 'cu-table-cell:not([head])',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableCellComponent<T> {
  @HostBinding('class')
  className = 'cu-table-cell';

  column!: keyof T;

  constructor(
    @Inject(ChangeDetectorRef) readonly changeDetectorRef: ChangeDetectorRef,
  ) {}

  setColumn(value: keyof T) {
    this.column = value;
    this.changeDetectorRef.detectChanges();
  }
}

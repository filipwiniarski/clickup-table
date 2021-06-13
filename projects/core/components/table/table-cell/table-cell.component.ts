import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Inject,
} from '@angular/core';

@Component({
  selector: 'cu-table-cell:not([head])',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableCellComponent<T> {
  @HostBinding('class')
  className = 'cu-table-cell';

  column!: keyof T;

  constructor(
    @Inject(ChangeDetectorRef) readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  setColumn(value: keyof T) {
    this.column = value;
    this.changeDetectorRef.detectChanges();
  }
}

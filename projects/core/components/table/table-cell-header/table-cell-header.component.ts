import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  Inject,
  Input,
  Output,
  SkipSelf,
} from '@angular/core';
import { TableCellComponent } from '../table-cell/table-cell.component';
import { TableComponent } from '../table.component';
import { filter, map, takeUntil, tap } from 'rxjs/operators';
import {
  SortEvent,
  SortMode,
  TableSortService,
} from '../services/table-sort.service';
import { DestroyService } from '../services/destroy-service.service';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

type Sort = 'string' | 'number' | 'date';

@Component({
  selector: 'cu-table-cell[head]',
  templateUrl: './table-cell-header.component.html',
  styleUrls: ['./table-cell-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableCellHeaderComponent<T> extends TableCellComponent<T> {
  @HostBinding('class')
  className = 'cu-table-cell cu-table-cell-header';

  @Input()
  sort: Sort | undefined;

  @Input()
  set disableSort(value: BooleanInput) {
    this._disableSort = coerceBooleanProperty(value);
  }

  get disableSort(): BooleanInput {
    return this._disableSort;
  }

  _disableSort = false;

  @Input()
  sortFn: ((a: T, b: T) => number) | undefined;

  @HostBinding('style.width.px')
  width: number | null = null;

  @HostBinding('style.flex')
  flex: string | number | null = null;

  @HostBinding('style.flexGrow')
  flexGrow: string | number | null = null;

  sortState: SortMode = null;

  constructor(
    @Inject(ChangeDetectorRef) readonly changeDetectorRef: ChangeDetectorRef,
    @Inject(ElementRef) readonly elementRef: ElementRef,
    @SkipSelf()
    @Inject(forwardRef(() => TableComponent))
    readonly table: TableComponent<T>,
    @SkipSelf()
    @Inject(forwardRef(() => TableSortService))
    readonly tableSortService: TableSortService<T>,
    @Inject(DestroyService) readonly destroy$: DestroyService
  ) {
    super(changeDetectorRef);

    tableSortService.sort$
      .pipe(
        takeUntil(this.destroy$),
        filter(() => !this.disableSort),
        map((event) => {
          if (event.column === this.column) {
            return event.mode;
          } else {
            return null;
          }
        }),
        tap(() => changeDetectorRef.markForCheck())
      )
      .subscribe((mode) => (this.sortState = mode));
  }

  sortData() {
    if (this.disableSort) {
      return;
    }
    const sortEvent = {
      column: this.column,
      mode: this.sortState ? (this.sortState === 'asc' ? 'desc' : null) : 'asc',
      sortFn: this.sortFn,
    } as SortEvent<keyof T>;
    this.tableSortService.sort$.next(sortEvent);
  }

  onResizeDrag(width: number) {
    this.setWidth(width);
    this.table.syncColumnWidths();
  }

  setWidth(width?: number) {
    this.flex = 'auto';
    this.flexGrow = 0;
    this.width =
      width ?? this.elementRef.nativeElement.getBoundingClientRect().width;
  }
}

import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  Inject,
  Input,
  SkipSelf,
  ViewChild,
} from '@angular/core';
import { TableCellComponent } from '../table-cell/table-cell.component';
import { TableComponent } from '../table.component';
import { filter, map, startWith, takeUntil, tap } from 'rxjs/operators';
import { SortMode, TableSortService } from '../services/table-sort.service';
import { DestroyService } from '../services/destroy-service.service';

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
  sortFn: ((a: T, b: T) => boolean) | undefined;

  @HostBinding('style.width.px')
  width: number | null = null;

  @ViewChild('resizeBar', { read: ElementRef }) readonly resizeBar:
    | ElementRef
    | undefined;

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
        map((event) => {
          if (event.column === this.column) {
            return event.mode;
          } else {
            return null;
          }
        }),
        tap(() => changeDetectorRef.markForCheck())
      )
      .subscribe((mode) => {
        this.sortState = mode;
      });
  }

  sortData() {
    this.tableSortService.sort$.next({
      column: this.column,
      mode: this.sortState ? (this.sortState === 'asc' ? 'desc' : null) : 'asc',
    });
  }

  setWidth(width?: number) {
    this.width =
      width ?? this.elementRef.nativeElement.getBoundingClientRect().width;
  }
}

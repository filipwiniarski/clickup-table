import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef, forwardRef,
  HostBinding,
  Inject,
  Input, SkipSelf,  ViewChild
} from '@angular/core'
import {TableCellComponent} from '../table-cell/table-cell.component'
import {TableComponent} from '../table.component'
import {finalize, map, startWith, takeUntil, tap} from 'rxjs/operators'
import {SortMode, TableSortService} from '../services/table-sort.service'
import {DestroyService} from '../services/destroy-service.service'
import {Observable} from 'rxjs'

type Sort = 'string' | 'number' | 'date';

@Component({
  selector: 'cu-table-cell[head]',
  templateUrl: './table-cell-header.component.html',
  styleUrls: ['./table-cell-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableCellHeaderComponent<T> extends TableCellComponent<T> implements AfterViewInit {
  @HostBinding('class')
  className = 'cu-table-cell cu-table-cell-header';

  @Input()
  sort: Sort | undefined;

  @Input()
  sortFn: ((a: T, b: T) => boolean) | undefined;

  @HostBinding('style.width.px')
  width: number | undefined;

  @ViewChild('resizeBar', {read: ElementRef}) readonly resizeBar: ElementRef | undefined;

  resizeBarPosition: number | undefined;

  sortState: SortMode = null;

  constructor(
    @Inject(ChangeDetectorRef) readonly changeDetectorRef: ChangeDetectorRef,
    @Inject(ElementRef) readonly elementRef: ElementRef,
    @SkipSelf() @Inject(forwardRef(() => TableComponent)) readonly table: TableComponent<T>,
    @SkipSelf() @Inject(forwardRef(() => TableSortService)) readonly tableSortService: TableSortService<T>,
    @Inject(DestroyService) readonly destroy$: DestroyService,
  ) {
    super(changeDetectorRef);
    table.tableResize$.pipe(
      startWith(null),
      tap(() => changeDetectorRef.markForCheck())
    ).subscribe(() => this.setResizeBarPosition());

    tableSortService.sort$.pipe(
      takeUntil(this.destroy$),
      map(event => {
        console.log(event);
        if (event.column === this.column) {
          return event.mode;
        } else {
          return null;
        }
      }),
      tap(() => changeDetectorRef.markForCheck())
    ).subscribe(mode => {
      this.sortState = mode;
    });
  }

  ngAfterViewInit() {
    this.setResizeBarPosition();
    this.changeDetectorRef.detectChanges();
  }

  sortData() {
    this.tableSortService.sort$.next({
      column: this.column,
      mode: this.sortState
        ? this.sortState === 'asc'
          ? 'desc' : null
        : 'asc'
    });
  }

  onResizeDrag(width: number) {
    this.width = width;
    this.table.tableResize$.next();
  }

  setResizeBarPosition(width?: number): void {
    const cellX = this.elementRef.nativeElement.getBoundingClientRect().x;
    const tableX = this.table.elementRef.nativeElement.getBoundingClientRect().x;
    const cellWidth = width ?? this.elementRef.nativeElement.clientWidth;
    this.resizeBarPosition = cellX - tableX + cellWidth - 2;
  }
}

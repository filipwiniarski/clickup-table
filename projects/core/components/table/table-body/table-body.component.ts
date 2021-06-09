import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  forwardRef,
  HostBinding,
  Inject, Input, OnChanges, SimpleChanges
} from '@angular/core'
import {TableComponent} from '../table.component'
import {TableDataDirective} from '../table-data/table-data.directive'
import {SortEvent, sortMethodMap, TableSortService} from '../services/table-sort.service'
import {finalize, takeUntil, tap} from 'rxjs/operators'
import {DestroyService} from '../services/destroy-service.service'

@Component({
  selector: 'cu-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableBodyComponent<T> implements OnChanges {
  @HostBinding('class')
  className = 'cu-table-body';

  @ContentChild(forwardRef(() => TableDataDirective))
  readonly row?: TableDataDirective<T>;

  readonly toContext = ($implicit: T, index: number) => ({$implicit, index});

  @Input()
  data: ReadonlyArray<T> | undefined;

  results: ReadonlyArray<T> | undefined;

  constructor(
    @Inject(forwardRef(() => TableComponent)) readonly table: TableComponent<T>,
    @Inject(TableSortService) readonly tableSortService: TableSortService<T>,
    @Inject(ChangeDetectorRef) readonly changeDetectorRef: ChangeDetectorRef,
    @Inject(DestroyService) readonly destroy$: DestroyService,
  ) {
    tableSortService.sort$?.pipe(
      takeUntil(destroy$),
      tap(() => changeDetectorRef.markForCheck())
    ).subscribe(event => {
      this.sort(event);
    })
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.data.currentValue) {
      this.results = simpleChanges.data.currentValue;
    }
    this.table.tableResize$.next();
  }

  sort(sortEvent: SortEvent<keyof T>): void {
    if (!sortEvent.mode) {
      this.results = this.data;
      return;
    }
    this.results = this.data?.concat().sort((a: Record<keyof T, any>, b: Record<keyof T, any>) => {
      const aValue = a[sortEvent.column!];
      const bValue = b[sortEvent.column!];
      const sortMethod = sortMethodMap.get(typeof aValue) as (a: any, b: any) => number;
      if (sortEvent.mode === 'asc') {
        return sortMethod(aValue, bValue);
      }
      return sortMethod(bValue, aValue);
    })
  }
}

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  forwardRef,
  HostBinding,
  Inject,
  Input,
  OnChanges,
  Optional,
  SimpleChanges,
} from '@angular/core';
import { TableComponent } from '../table.component';
import { TableDataDirective } from '../table-data/table-data.directive';
import {
  SortEvent,
  sortMethodMap,
  TableSortService,
} from '../services/table-sort.service';
import { takeUntil, tap } from 'rxjs/operators';
import { DestroyService } from '../services/destroy-service.service';
import { CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'cu-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableBodyComponent<T> implements OnChanges {
  @HostBinding('class')
  className = 'cu-table-body';

  @Input()
  draggable: boolean = false;

  @ContentChild(forwardRef(() => TableDataDirective))
  readonly row?: TableDataDirective<T>;

  readonly toContext = ($implicit: T, index: number) => ({ $implicit, index });

  @Input()
  data: ReadonlyArray<T> | undefined;

  @Input()
  @HostBinding('class.cu-table-loading')
  loading: boolean | undefined;

  results: ReadonlyArray<T> | undefined;

  constructor(
    @Inject(forwardRef(() => TableComponent)) readonly table: TableComponent<T>,
    @Inject(TableSortService) readonly tableSortService: TableSortService<T>,
    @Inject(ChangeDetectorRef) readonly changeDetectorRef: ChangeDetectorRef,
    @Inject(DestroyService) readonly destroy$: DestroyService,
    @Optional() @Inject(CdkDropList) readonly dropList: CdkDropList
  ) {
    tableSortService.sort$
      ?.pipe(
        takeUntil(destroy$),
        tap(() => changeDetectorRef.markForCheck())
      )
      .subscribe((event) => this.sort(event));

    dropList?.dropped
      .pipe(
        takeUntil(destroy$),
        tap(() => changeDetectorRef.markForCheck())
      )
      .subscribe((event) =>
        this.moveElement(
          this.results as ReadonlyArray<T>,
          event.previousIndex,
          event.currentIndex
        )
      );
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.data.currentValue) {
      this.results = simpleChanges.data.currentValue;
    }
  }

  sort(sortEvent: SortEvent<keyof T>): void {
    if (!sortEvent.mode) {
      this.results = this.data;
      return;
    }
    this.results = this.data
      ?.concat()
      .sort((a: Record<keyof T, any>, b: Record<keyof T, any>) => {
        const aValue = a[sortEvent.column!];
        const bValue = b[sortEvent.column!];
        const sortMethod = sortEvent.sortFn
          ? sortEvent.sortFn
          : (sortMethodMap.get(typeof aValue) as (a: any, b: any) => number);
        if (!sortMethod) {
          return 1;
        }
        if (sortEvent.mode === 'asc') {
          return sortMethod(aValue, bValue);
        }
        return sortMethod(bValue, aValue);
      });
  }

  moveElement(list: ReadonlyArray<T>, from: number, to: number) {
    const elements = [...list] as any[];
    const element = elements[from];
    elements.splice(from, 1);
    elements.splice(to, 0, element);
    this.results = elements;
  }
}

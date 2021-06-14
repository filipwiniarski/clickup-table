import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  EventEmitter,
  Input,
  Output,
  Inject,
} from '@angular/core';
import { SortEvent, TableSortService } from './services/table-sort.service';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { DestroyService } from './services/destroy-service.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'cu-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TableSortService, DestroyService],
})
export class TableComponent<T> {
  @HostBinding('class')
  className = 'cu-table';

  @Input()
  columns!: ReadonlyArray<keyof T | string>;

  @Output()
  onSort = new EventEmitter<SortEvent<keyof T>>();

  /**
   * Tells if table is fetching data from server.
   * If so then pagination and sort features will switch to server ready implementation.
   * @param value
   */
  @Input()
  set async(value: BooleanInput) {
    this._async = coerceBooleanProperty(value);
  }

  get async(): BooleanInput {
    return this._async;
  }

  _async = false;

  constructor(
    @Inject(TableSortService) tableSort: TableSortService<T>,
    @Inject(DestroyService) destroy$: DestroyService
  ) {
    tableSort.sort$
      .pipe(takeUntil(destroy$))
      .subscribe((event) => this.onSort.next(event));
  }
}

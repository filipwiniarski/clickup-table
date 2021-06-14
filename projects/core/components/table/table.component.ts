import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { TableSortService } from './services/table-sort.service';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'cu-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TableSortService],
})
export class TableComponent<T> {
  @HostBinding('class')
  className = 'cu-table';

  @Input()
  columns!: ReadonlyArray<keyof T | string>;

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
}

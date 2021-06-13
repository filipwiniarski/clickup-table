import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { TableSortService } from './services/table-sort.service';

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
}

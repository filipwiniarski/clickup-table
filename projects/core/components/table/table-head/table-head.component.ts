import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cu-table-head',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableHeadComponent<T> {
  @HostBinding('class')
  className = 'cu-table-head';
}

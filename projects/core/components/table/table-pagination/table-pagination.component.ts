import {ChangeDetectionStrategy, Component, HostBinding} from '@angular/core'

@Component({
  selector: 'cu-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TablePaginationComponent {
  @HostBinding('class')
  className = 'cu-table-pagination';
}

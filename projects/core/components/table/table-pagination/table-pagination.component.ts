import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
  selector: 'lib-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TablePaginationComponent {}

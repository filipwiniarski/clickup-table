import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
  selector: 'cu-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableBodyComponent {
}

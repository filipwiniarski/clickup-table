import {ChangeDetectionStrategy, Component, Input} from '@angular/core'

@Component({
  selector: 'cu-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input()
  columns!: ReadonlyArray<string>;

  @Input()
  data: ReadonlyArray<any> | undefined;
}

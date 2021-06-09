import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core'
import {Subject} from 'rxjs'
import {SortEvent, sortMethodMap, TableSortService} from './services/table-sort.service'
import {DestroyService} from './services/destroy-service.service'
import {finalize, takeUntil} from 'rxjs/operators'

@Component({
  selector: 'cu-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TableSortService,
    DestroyService
  ]
})
export class TableComponent<T> implements OnChanges {
  @Input()
  columns!: ReadonlyArray<keyof T>;

  tableResize$ = new Subject<void>();

  constructor(
    @Inject(ElementRef) readonly elementRef: ElementRef,
    @Inject(ChangeDetectorRef) readonly changeDetectorRef: ChangeDetectorRef,
    @Inject(DestroyService) readonly destroy$: DestroyService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.tableResize$.next();
  }
}

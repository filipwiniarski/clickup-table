import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';
import { TableSortService } from './services/table-sort.service';
import { DestroyService } from './services/destroy-service.service';

@Component({
  selector: 'cu-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TableSortService, DestroyService],
})
export class TableComponent<T> implements OnChanges {
  @HostBinding('class')
  className = 'cu-table';

  @Input()
  columns!: ReadonlyArray<keyof T | string>;

  tableResize$ = new Subject<keyof T>();

  constructor(
    @Inject(ElementRef) readonly elementRef: ElementRef,
    @Inject(ChangeDetectorRef) readonly changeDetectorRef: ChangeDetectorRef,
    @Inject(DestroyService) readonly destroy$: DestroyService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.tableResize$.next();
  }
}

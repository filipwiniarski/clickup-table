import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  EventEmitter,
  Input,
  Output,
  Inject,
  ElementRef,
} from '@angular/core';
import { SortEvent, TableSortService } from './services/table-sort.service';
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

  constructor(
    @Inject(ElementRef) readonly elementRef: ElementRef,
    @Inject(TableSortService) tableSort: TableSortService<T>,
    @Inject(DestroyService) destroy$: DestroyService
  ) {
    tableSort.sort$
      .pipe(takeUntil(destroy$))
      .subscribe((event) => this.onSort.next(event));
  }

  syncColumnWidths(): void {
    const columnWidths = Array.from(
      this.elementRef.nativeElement.querySelectorAll('.cu-table-cell-header')
    ).map((cell: any) => cell.getBoundingClientRect().width);
    const numberOfColumns = this.columns.length;
    this.elementRef.nativeElement
      .querySelectorAll('.cu-table-cell:not(.cu-table-cell-header)')
      .forEach((cell: HTMLElement, index: number) => {
        const width = columnWidths[index % numberOfColumns];
        cell.style.flex = 'auto';
        cell.style.flexGrow = '0';
        cell.style.width = `${width}px`;
      });
  }
}

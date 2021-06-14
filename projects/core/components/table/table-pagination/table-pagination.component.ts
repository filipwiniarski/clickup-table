import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  Output,
  EventEmitter,
  Inject,
  ChangeDetectorRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { DestroyService } from '../services/destroy-service.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'cu-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class TablePaginationComponent {
  @HostBinding('class')
  className = 'cu-table-pagination';

  @Input()
  total = 0;

  @Input()
  sizeOptions: number[] = [5, 10, 25, 50, 100];

  @Input()
  page = 0;

  @Output()
  readonly pageChange = new EventEmitter<number>();

  @Input()
  size = 10;

  @Output()
  readonly sizeChange = new EventEmitter<number>();

  readonly sizeControl = new FormControl(this.size);

  get totalPages(): number {
    return Math.ceil(this.total / this.sizeControl.value);
  }

  get pageRange(): number[] {
    let length = 5;
    if (length > this.totalPages) length = this.totalPages;
    let start = this.page + 1 - Math.floor(length / 2);
    start = Math.max(start, 1);
    start = Math.min(start, 1 + this.totalPages - length);
    return Array.from({ length: length }, (el, i) => start + i);
  }

  get itemsRange(): string | null {
    if (!this.total) {
      return '-';
    }
    const size = Number(this.sizeControl.value);
    const first = this.page * size + 1;
    if (this.page + 1 === this.totalPages) {
      const last = this.page * size + (this.total % size || size);
      return `${first} - ${last}`;
    }
    return `${first} - ${first + size - 1}`;
  }

  constructor(
    @Inject(DestroyService) destroy$: DestroyService,
    @Inject(ChangeDetectorRef) readonly changeDetectorRef: ChangeDetectorRef
  ) {
    this.sizeControl.valueChanges
      .pipe(takeUntil(destroy$))
      .subscribe((value) => this.changeSize(value));
  }

  changePage(page: number): void {
    this.page = page;
    this.pageChange.emit(page);
  }

  changeSize(size: number): void {
    const sizeNumber = Number(size);
    this.size = sizeNumber;
    this.sizeChange.emit(sizeNumber);
    this.changePage(0);
  }
}

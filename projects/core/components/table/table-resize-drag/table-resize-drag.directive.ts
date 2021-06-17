import {
  Directive,
  ElementRef,
  forwardRef,
  Inject,
  Output,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import {
  distinctUntilChanged,
  map,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { TableCellHeaderComponent } from '../table-cell-header/table-cell-header.component';

@Directive({
  selector: '[cuTableResizeDrag]',
})
export class TableResizeDragDirective<T> {
  @Output()
  readonly cuTableResizeDrag = fromEvent(
    this.elementRef.nativeElement,
    'mousedown'
  ).pipe(
    tap((e) => e.preventDefault()),
    switchMap(() => {
      const { width, right } =
        this.cell.elementRef.nativeElement.getBoundingClientRect();
      return fromEvent(this.documentRef, 'mousemove').pipe(
        distinctUntilChanged(),
        map((event) => event as MouseEvent),
        map(({ clientX }) => width + clientX - right),
        takeUntil(fromEvent(this.documentRef, 'mouseup'))
      );
    })
  );

  constructor(
    @Inject(DOCUMENT) readonly documentRef: Document,
    @Inject(ElementRef) readonly elementRef: ElementRef<HTMLElement>,
    @Inject(forwardRef(() => TableCellHeaderComponent))
    readonly cell: TableCellHeaderComponent<T>
  ) {}
}

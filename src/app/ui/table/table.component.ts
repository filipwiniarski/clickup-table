import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export abstract class TableComponent<T> {
  columns!: Array<keyof T | string>;

  data: T[] | undefined;
}

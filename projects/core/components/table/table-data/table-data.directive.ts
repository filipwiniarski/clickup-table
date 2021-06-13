import { Directive, Inject, Input, TemplateRef } from '@angular/core';

export interface DataContext<T> {
  readonly index: number;
  $implicit: T;
}

@Directive({
  selector: 'ng-template[cuTableData]',
})
export class TableDataDirective<T> {
  @Input()
  cuTableDataOf: T[] | undefined = [];

  constructor(
    @Inject(TemplateRef) readonly template: TemplateRef<DataContext<T>>
  ) {}

  static ngTemplateContextGuard<T>(
    _dir: TableDataDirective<T>,
    _ctx: any
  ): _ctx is DataContext<T> {
    return true;
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const sortString = (a: string, b: string) => ('' + a).localeCompare(b);

const sortNumber = (a: number, b: number) => a - b;

const sortDate = (a: Date, b: Date) =>
  new Date(a).getTime() - new Date(b).getTime();

export const sortMethodMap = new Map<string, (a: any, b: any) => number>([
  ['string', sortString],
  ['number', sortNumber],
  ['date', sortDate],
]);

export type SortMode = 'asc' | 'desc' | null;

export type SortEvent<T> = {
  column: T | null;
  mode: SortMode;
  sortFn?: ((a: any, b: any) => number) | undefined;
};

@Injectable()
export class TableSortService<T> {
  sort$ = new BehaviorSubject<SortEvent<keyof T>>({
    column: null,
    mode: null,
  });
}

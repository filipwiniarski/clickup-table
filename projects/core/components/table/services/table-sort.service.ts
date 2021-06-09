import {Inject, Injectable} from '@angular/core'
import {BehaviorSubject, Observable, Subject} from 'rxjs'
import {filter, map, scan, tap} from 'rxjs/operators'

const sortString = (a: string, b: string) => ('' + a).localeCompare(b);

const sortNumber = (a: number, b: number) => a - b;

const sortDate = (a: Date, b: Date) => new Date(a).getTime() - new Date(b).getTime();

export const sortMethodMap = new Map<string, (a: any, b: any) => number>([
  ['string', sortString],
  ['number', sortNumber],
  ['date', sortDate],
])

export type SortMode = 'asc' | 'desc' | null;

export type SortEvent<T> = {
  column: T | null;
  mode: SortMode;
}

@Injectable()
export class TableSortService<T> {
  sort$ = new BehaviorSubject<SortEvent<keyof T>>({
    column: null,
    mode: null,
  });
}

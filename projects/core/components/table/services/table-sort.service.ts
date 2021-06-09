import {Inject, Injectable} from '@angular/core'
import {Observable, Subject} from 'rxjs'
import {filter, map, scan} from 'rxjs/operators'

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

@Injectable({
  providedIn: 'root'
})
export class TableSortService<T> {
  sort$ = new Subject<keyof T | null>();

  sortEvent$: Observable<SortEvent<keyof T>>

  constructor(
  ) {
    this.sortEvent$ = this.sort$.pipe(
      scan((acc: (keyof T | null)[], column) => {
        acc.push(column);
        return acc.slice(-3);
      }, []),
      filter(([e1, e2, e3]) => {
        if (e1 === e2 && e2 === e3) {
          this.sort$.next(null);
          return false;
        }
        return true;
      }),
      map(events => {
        const column = events[events.length - 1];
        const [, e2, e3] = events;
        if (!column) {
          return {
            column: null,
            mode: null
          }
        }
        if (events.length === 1 || (e2 === null && e3 === column)) {
          return {
            column,
            mode: 'asc'
          }
        }
        return {
          column,
          mode: 'desc'
        }
      }),
      map(event => event as SortEvent<keyof T>)
    )
  }
}

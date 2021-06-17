import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
} from '@angular/core';
import { Artist } from '../../core/models/artist';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { SortEvent } from '@clickup/core/components/table/services/table-sort.service';
import { ArtistService } from '../../core/api/artist.service';
import { DestroyService } from '@clickup/core/components/table/services/destroy-service.service';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  skip,
  switchMap,
  takeUntil,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import {
  selectData,
  selectPage,
  selectSearchValue,
  selectSize,
  selectSort,
  selectTotal,
} from '../../store/artists-table/artists-table.selectors';
import { AppState } from '../../store/state';
import {
  changePage,
  changeSize,
  init,
  requestData,
  sort,
} from '../../store/artists-table/artists-table.actions';
import { TableComponent } from '../../ui/table/table.component';

const DEBOUNCE_TIME = 400;

@Component({
  selector: 'app-view-table-server',
  templateUrl: './view-table-server.component.html',
  styleUrls: ['./view-table-server.component.scss', '../../app.component.scss'],
  providers: [DestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewTableServerComponent extends TableComponent<Artist> {
  columns: Array<keyof Artist> = ['name', 'genres', 'followers', 'popularity'];

  total$ = this.store.select<number>(selectTotal);

  page$ = this.store.select<number | null>(selectPage);

  constructor(
    @Inject(ArtistService) passengerService: ArtistService,
    @Inject(DestroyService) destroy$: DestroyService,
    @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    @Inject(Store) readonly store: Store<AppState>
  ) {
    super();

    /** Table state reset for the purpose of the demo: */
    store.dispatch(
      init({
        value: {
          page: 0,
          size: 10,
          data: undefined,
          total: 0,
        },
      })
    );

    combineLatest([
      store.select(selectSort),
      store.select(selectPage),
      store.select(selectSize),
      store.select(selectSearchValue),
    ])
      .pipe(
        takeUntil(destroy$),
        tap(() => (this.data = undefined)),
        debounceTime(DEBOUNCE_TIME),
        tap(() => store.dispatch(requestData())),
        switchMap(() => store.select(selectData)),
        distinctUntilChanged(),
        tap(() => changeDetectorRef.markForCheck())
      )
      .subscribe((res) => (this.data = res));
  }

  drop(event: CdkDragDrop<Artist[]>, data: Artist[] | undefined) {
    if (data) {
      moveItemInArray(data, event.previousIndex, event.currentIndex);
    }
  }

  onSizeChange(size: number): void {
    this.store.dispatch(changeSize({ value: size }));
  }

  onPageChange(page: number): void {
    this.store.dispatch(changePage({ value: page }));
  }

  onSortChange(sortEvent: SortEvent<keyof Artist>): void {
    this.store.dispatch(sort({ value: sortEvent }));
  }
}

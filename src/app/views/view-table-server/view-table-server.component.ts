import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
} from '@angular/core';
import { Artist } from '../../core/models/artist';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { SortEvent } from '@clickup/core/components/table/services/table-sort.service';
import { FormControl, Validators } from '@angular/forms';
import { ArtistService } from '../../core/api/artist.service';
import { DestroyService } from '@clickup/core/components/table/services/destroy-service.service';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  startWith,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-view-table-server',
  templateUrl: './view-table-server.component.html',
  styleUrls: ['./view-table-server.component.scss', '../../app.component.scss'],
  providers: [DestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewTableServerComponent {
  readonly searchControl = new FormControl(null, Validators.minLength(2));

  columns: ReadonlyArray<keyof Artist> = [
    'name',
    'genres',
    'followers',
    'popularity',
  ];

  data: Artist[] | undefined;

  total = 0;

  readonly pageChange$ = new BehaviorSubject<any>(0);

  readonly sizeChange$ = new BehaviorSubject<any>(10);

  readonly sort$ = new BehaviorSubject<SortEvent<keyof Artist>>({
    column: null,
    mode: null,
  });

  constructor(
    @Inject(ArtistService) passengerService: ArtistService,
    @Inject(DestroyService) destroy$: DestroyService,
    @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef
  ) {
    combineLatest([
      this.sort$,
      this.pageChange$,
      this.sizeChange$,
      this.searchControl.valueChanges.pipe(
        startWith(null),
        filter((value: string) => !value || value?.length > 1),
        distinctUntilChanged(),
        tap(() => this.pageChange$.next(0))
      ),
    ])
      .pipe(
        takeUntil(destroy$),
        distinctUntilChanged(),
        tap(() => (this.data = undefined)),
        debounceTime(400),
        switchMap(([sortEvent, page, size, query]) =>
          passengerService.getArtists({
            page,
            size,
            query,
            sortBy: sortEvent.column,
            sortDirection: sortEvent.mode,
          })
        ),
        tap(() => changeDetectorRef.markForCheck())
      )
      .subscribe(
        ({ data, total }) => {
          this.data = data;
          this.total = total;
        },
        () => {
          this.data = [];
          this.total = 0;
        }
      );
  }

  drop(event: CdkDragDrop<Artist[]>, data: Artist[] | undefined) {
    if (data) {
      moveItemInArray(data, event.previousIndex, event.currentIndex);
    }
  }

  onSizeChange(size: number): void {
    this.sizeChange$.next(size);
  }

  onPageChange(page: number): void {
    this.pageChange$.next(page);
  }

  onSortChange(sort: SortEvent<any>): void {
    this.sort$.next(sort as SortEvent<keyof Artist>);
  }
}

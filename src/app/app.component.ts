import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ArtistService } from './core/api/artist.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
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
import { Artist } from './core/models/artist';
import { FormControl, Validators } from '@angular/forms';
import { SortEvent } from '@clickup/core/components/table/services/table-sort.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DestroyService],
})
export class AppComponent {
  columns: ReadonlyArray<keyof Artist> = [
    'name',
    'images',
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

  readonly searchControl = new FormControl(null, Validators.minLength(2));

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
        tap(() => {
          this.data = undefined;
          changeDetectorRef.markForCheck();
        }),
        debounceTime(400),
        switchMap(([sortEvent, page, size, query]) =>
          passengerService.getArtists({
            page,
            size,
            query,
            sortBy: sortEvent.column,
            sortDirection: sortEvent.mode,
          })
        )
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

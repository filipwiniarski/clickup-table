import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ArtistService } from './core/api/artist.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { DestroyService } from '@clickup/core/components/table/services/destroy-service.service';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { Artist } from './core/models/artist';
import { FormControl } from '@angular/forms';

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

  pageChange$ = new BehaviorSubject<number>(0);

  sizeChange$ = new BehaviorSubject<number>(10);

  readonly searchControl = new FormControl();

  constructor(
    @Inject(ArtistService) passengerService: ArtistService,
    @Inject(DestroyService) destroy$: DestroyService,
    @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef
  ) {
    combineLatest([
      this.pageChange$,
      this.sizeChange$,
      this.searchControl.valueChanges.pipe(startWith(null)),
    ])
      .pipe(
        takeUntil(destroy$),
        distinctUntilChanged(),
        tap(() => (this.data = undefined)),
        debounceTime(400),
        switchMap(([page, size, query]) =>
          passengerService.getArtists({ page, size, query })
        ),
        tap(() => changeDetectorRef.markForCheck())
      )
      .subscribe(
        ({ data, total }) => {
          this.data = data;
          this.total = total;
        },
        (error) => {
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
}

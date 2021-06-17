import { Inject, Injectable } from '@angular/core';
import { ArtistService } from '../../core/api/artist.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadData, requestData } from './artists-table.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../state';
import { artistsTable } from './artists-table.selectors';

@Injectable()
export class ArtistsTableEffects {
  loadArtists$: any = createEffect(() =>
    this.actions$.pipe(
      ofType(requestData),
      withLatestFrom(this.store.select(artistsTable)),
      mergeMap(([, state]) =>
        this.artistService
          .getArtists({
            query: state.query,
            size: state.size,
            page: state.page,
            sortBy: state.sort.column,
            sortDirection: state.sort.mode,
          })
          .pipe(catchError((err) => of(err)))
      ),
      map((res) => loadData({ value: res }))
    )
  );

  constructor(
    @Inject(Actions) readonly actions$: Actions,
    @Inject(ArtistService) readonly artistService: ArtistService,
    @Inject(Store) readonly store: Store<AppState>
  ) {}
}

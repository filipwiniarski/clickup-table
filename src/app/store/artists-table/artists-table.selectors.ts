import { createSelector } from '@ngrx/store';
import { ArtistsTableState } from './artists-table.reducer';
import { AppState } from '../state';
import { Artist } from '../../core/models/artist';

export const artistsTable = (state: AppState) => state.artistsTable;

export const selectSearchValue = createSelector(
  artistsTable,
  (state: ArtistsTableState<Artist>) => state.query
);

export const selectSize = createSelector(
  artistsTable,
  (state: ArtistsTableState<Artist>) => state.size
);

export const selectPage = createSelector(
  artistsTable,
  (state: ArtistsTableState<Artist>) => state.page
);

export const selectSort = createSelector(
  artistsTable,
  (state: ArtistsTableState<Artist>) => state.sort
);

export const selectTotal = createSelector(
  artistsTable,
  (state: ArtistsTableState<Artist>) => state.total
);

export const selectData = createSelector(
  artistsTable,
  (state: ArtistsTableState<Artist>) => state.data
);

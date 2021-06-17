import { createReducer, on } from '@ngrx/store';
import {
  changePage,
  changeSize,
  init,
  loadData,
  search,
  sort,
} from './artists-table.actions';
import { SortEvent } from '@clickup/core/components/table/services/table-sort.service';
import { Artist } from '../../core/models/artist';

export interface ArtistsTableState<T> {
  page: number | null;
  size: number | null;
  query: string | null;
  sort: SortEvent<keyof T>;
  total: number;
  data: T[] | undefined;
}

export const initialState: ArtistsTableState<Artist> = {
  page: null,
  size: null,
  query: null,
  sort: {
    column: null,
    mode: null,
  },
  total: 0,
  data: undefined,
};

const _artistsTableReducer = createReducer(
  initialState,
  on(init, (state: ArtistsTableState<Artist>, { value }) => {
    return {
      ...initialState,
      ...value,
    };
  }),
  on(search, (state: ArtistsTableState<Artist>, { value }) => {
    return {
      ...state,
      query: value,
      page: 0,
    };
  }),
  on(changePage, (state: ArtistsTableState<Artist>, { value }) => {
    return {
      ...state,
      page: value,
    };
  }),
  on(sort, (state: ArtistsTableState<Artist>, { value }) => {
    return {
      ...state,
      sort: value,
    };
  }),
  on(changeSize, (state: ArtistsTableState<Artist>, { value }) => {
    return {
      ...state,
      size: value,
    };
  }),
  on(loadData, (state: ArtistsTableState<Artist>, { value }) => {
    return {
      ...state,
      ...value,
    };
  })
);

export function artistsTableReducer(
  state: ArtistsTableState<Artist> | undefined,
  action: any
) {
  return _artistsTableReducer(state, action);
}

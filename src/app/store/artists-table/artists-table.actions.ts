import { createAction, props } from '@ngrx/store';
import { SortEvent } from '@clickup/core/components/table/services/table-sort.service';
import { Artist } from '../../core/models/artist';
import { ListFetch } from '../../core/models/api';
import { ArtistsTableState } from './artists-table.reducer';

export const init = createAction(
  '[Table Component] Init',
  props<{ value?: Partial<ArtistsTableState<Artist>> }>()
);

export const search = createAction(
  '[Table Component] Search',
  props<{ value: string }>()
);

export const changePage = createAction(
  '[Table Component] Change page',
  props<{ value: number }>()
);

export const sort = createAction(
  '[Table Component] Sort',
  props<{ value: SortEvent<keyof Artist> }>()
);

export const changeSize = createAction(
  '[Table Component] Change size',
  props<{ value: number }>()
);

export const requestData = createAction('[Table Component] Request data');

export const loadData = createAction(
  '[Table Component] Load data',
  props<{ value: ListFetch<Artist> }>()
);

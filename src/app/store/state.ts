import { ArtistsTableState } from './artists-table/artists-table.reducer';
import { Artist } from '../core/models/artist';

export interface AppState {
  artistsTable: ArtistsTableState<Artist>;
}

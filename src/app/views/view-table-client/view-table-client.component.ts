import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
} from '@angular/core';
import { Artist } from '../../core/models/artist';
import { DestroyService } from '@clickup/core/components/table/services/destroy-service.service';
import { map, tap } from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state';
import {
  init,
  requestData,
} from '../../store/artists-table/artists-table.actions';
import {
  selectData,
  selectSearchValue,
} from '../../store/artists-table/artists-table.selectors';
import { combineLatest } from 'rxjs';
import { TableComponent } from '../../ui/table/table.component';

@Component({
  selector: 'app-view-table-client',
  templateUrl: './view-table-client.component.html',
  styleUrls: ['./view-table-client.component.scss', '../../app.component.scss'],
  providers: [DestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewTableClientComponent extends TableComponent<Artist> {
  columns: Array<keyof Artist> = ['name', 'genres', 'followers', 'popularity'];

  constructor(
    @Inject(DestroyService) destroy$: DestroyService,
    @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    @Inject(Store) store: Store<AppState>
  ) {
    super();

    /** Table state reset for the purpose of the demo: */
    store.dispatch(init({}));

    store.dispatch(requestData());

    combineLatest([store.select(selectData), store.select(selectSearchValue)])
      .pipe(
        map(([data, query]) =>
          data?.filter(({ name }) =>
            query ? name.toLowerCase().includes(query?.toLowerCase()) : true
          )
        ),
        tap(() => changeDetectorRef.markForCheck())
      )
      .subscribe((data) => (this.data = data));
  }

  drop(event: CdkDragDrop<Artist[]>, data: Artist[] | undefined) {
    if (data) {
      moveItemInArray(data, event.previousIndex, event.currentIndex);
    }
  }
}

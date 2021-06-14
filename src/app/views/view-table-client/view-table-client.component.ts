import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
} from '@angular/core';
import { Artist } from '../../core/models/artist';
import { FormControl, Validators } from '@angular/forms';
import { ArtistService } from '../../core/api/artist.service';
import { DestroyService } from '@clickup/core/components/table/services/destroy-service.service';
import { takeUntil, tap } from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-view-table-client',
  templateUrl: './view-table-client.component.html',
  styleUrls: ['./view-table-client.component.scss', '../../app.component.scss'],
  providers: [DestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewTableClientComponent {
  columns: ReadonlyArray<keyof Artist> = [
    'name',
    'genres',
    'followers',
    'popularity',
  ];

  data: Artist[] | undefined;

  readonly searchControl = new FormControl(null, Validators.minLength(2));

  constructor(
    @Inject(ArtistService) passengerService: ArtistService,
    @Inject(DestroyService) destroy$: DestroyService,
    @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef
  ) {
    passengerService
      .getArtists()
      .pipe(tap(() => changeDetectorRef.markForCheck()))
      .subscribe(({ data }) => (this.data = data));

    this.searchControl.valueChanges.pipe(takeUntil(destroy$)).subscribe();
  }

  drop(event: CdkDragDrop<Artist[]>, data: Artist[] | undefined) {
    if (data) {
      moveItemInArray(data, event.previousIndex, event.currentIndex);
    }
  }
}

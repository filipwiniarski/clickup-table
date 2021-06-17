import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { distinctUntilChanged, filter, takeUntil, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { search } from './store/artists-table/artists-table.actions';
import { DestroyService } from '@clickup/core/components/table/services/destroy-service.service';
import { AppState } from './store/state';
import { PAGE_TITLE } from './app.providers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class AppComponent {
  readonly searchControl = new FormControl(null, Validators.minLength(2));

  constructor(
    @Inject(Store) store: Store<AppState>,
    @Inject(DestroyService) destroy$: DestroyService,
    @Inject(PAGE_TITLE) readonly pageTitle$: Observable<string | undefined>
  ) {
    this.searchControl.valueChanges
      .pipe(
        takeUntil(destroy$),
        filter((value: string) => !value || value?.length > 1),
        distinctUntilChanged(),
        tap((value) => store.dispatch(search({ value })))
      )
      .subscribe();
  }
}

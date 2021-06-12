import {ChangeDetectorRef, Component, Inject} from '@angular/core'
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop'
import {PassengerService} from './core/api/passenger.service'
import {PassengerTableItem} from './core/models/passenger'
import {BehaviorSubject, combineLatest} from 'rxjs'
import {DestroyService} from '@clickup/core/components/table/services/destroy-service.service'
import {debounceTime, distinctUntilChanged, switchMap, takeUntil, tap} from 'rxjs/operators'
import {PassengerTableItemPipe} from './core/pipes/passenger-table-item.pipe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    DestroyService,
    PassengerTableItemPipe
  ]
})
export class AppComponent {
  columns: ReadonlyArray<keyof PassengerTableItem> = [
    'name',
    'logo',
    'trips',
  ]

  passengers: PassengerTableItem[] | undefined;

  total = 0;

  pageChange$ = new BehaviorSubject<number>(0);

  sizeChange$ = new BehaviorSubject<number>(10);

  constructor(
    @Inject(PassengerService) passengerService: PassengerService,
    @Inject(DestroyService) destroy$: DestroyService,
    @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    @Inject(PassengerTableItemPipe) passengerTableItemPipe: PassengerTableItemPipe,
  ) {
    combineLatest([
      this.pageChange$,
      this.sizeChange$,
    ]).pipe(
      takeUntil(destroy$),
      distinctUntilChanged(),
      tap(() => this.passengers = undefined),
      debounceTime(300),
      switchMap(([page, size]) => passengerService.getPassengers({page, size})),
      tap(() => changeDetectorRef.markForCheck()),
    ).subscribe(({ data, totalPassengers }) => {
      this.passengers = data.map(passenger => passengerTableItemPipe.transform(passenger));
      this.total = totalPassengers;
    });
  }

  drop(event: CdkDragDrop<PassengerTableItem[]>, data: PassengerTableItem[] | undefined) {
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

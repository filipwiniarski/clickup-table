import { Pipe, PipeTransform } from '@angular/core';
import {Passenger, PassengerTableItem} from '../models/passenger'

@Pipe({
  name: 'passengerTableItem'
})
export class PassengerTableItemPipe implements PipeTransform {

  transform(value: Passenger): PassengerTableItem {
    return {
      name: value.name,
      trips: value.trips,
      logo: value.airline.logo
    };
  }

}

import {Airline} from './airline'

export interface Passenger {
  airline: Airline;
  name: string;
  trips: number;
}

export interface PassengerTableItem {
  name: string;
  logo: string;
  trips: number;
}

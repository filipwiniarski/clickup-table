import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {PaginationParams} from '../models/pagination-params'
import {Observable} from 'rxjs'
import {Passenger} from '../models/passenger'
import {ListFetch} from '../models/api'

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private http: HttpClient) { }

  getPassengers(params: PaginationParams): Observable<ListFetch<Passenger>> {
    return this.http.get<ListFetch<Passenger>>('https://api.instantwebtools.net/v1/passenger', {
      params: new HttpParams({
        fromObject: params
      })
    });
  }
}

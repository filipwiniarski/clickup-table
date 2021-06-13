import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {PaginationParams} from '../models/pagination-params'
import {Observable} from 'rxjs'
import {ListFetch} from '../models/api'
import {Artist} from '../models/artist'

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getArtists(params: PaginationParams): Observable<ListFetch<Artist>> {
    return this.http.get<ListFetch<Artist>>('http://localhost:63282/.netlify/functions/mock', {
      params: new HttpParams({
        fromObject: params
      })
    });
  }
}

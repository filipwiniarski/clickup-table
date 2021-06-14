import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaginationParams } from '../models/pagination-params';
import { Observable } from 'rxjs';
import { ListFetch } from '../models/api';
import { Artist } from '../models/artist';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor(private http: HttpClient) {}

  getArtists(params: PaginationParams = {}): Observable<ListFetch<Artist>> {
    return this.http.get<ListFetch<Artist>>(`${environment.baseApiUrl}/mock`, {
      params: new HttpParams({
        fromObject: params as any,
      }),
    });
  }
}

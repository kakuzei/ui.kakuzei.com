import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { API_URL } from 'environments/config';
import { IApiResponse } from '../interfaces';

@Injectable()
export class ApiService {
  private url = API_URL;

  constructor(private httpClient: HttpClient) {}

  get<T>(resource: string): Observable<T> {
    return this.httpClient
      .get<IApiResponse<T>>(`${this.url}/${resource}`)
      .map(response => response.data);
  }
}

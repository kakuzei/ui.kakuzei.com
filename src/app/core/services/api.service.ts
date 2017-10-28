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

  get<T>(resource: string, id?: string): Observable<T> {
    const url = `${this.url}/${resource}` + (id ? `/${id}` : '');
    return this.httpClient
      .get<IApiResponse<T>>(url)
      .map(response => response.data);
  }
}

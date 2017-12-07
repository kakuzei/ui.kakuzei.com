import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { API_URL } from 'environments/config';
import { IApiResponse } from '../interfaces';

@Injectable()
export class ApiService {
  private apiUrl: string = API_URL;

  constructor(private httpClient: HttpClient) {}

  protected get<T>(resource: string, id?: string, nestedResource?: string): Observable<T> {
    const url = `${this.apiUrl}/${resource}${id ? `/${id}` : ''}${nestedResource ? `/${nestedResource}` : ''}`;
    return this.httpClient
      .get<IApiResponse<T>>(url)
      .map(response => response.data);
  }
}

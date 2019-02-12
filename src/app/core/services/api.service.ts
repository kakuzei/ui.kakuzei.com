import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { API_URL } from 'environments/config';
import { IApiResponse } from '../interfaces';

@Injectable()
export class ApiService {
  private readonly apiUrl: string = API_URL;

  constructor(private readonly httpClient: HttpClient) {}

  protected get<T>(resource: string, id?: string, nestedResource?: string): Observable<T> {
    const url = `${this.apiUrl}/${resource}${id ? `/${id}` : ''}${nestedResource ? `/${nestedResource}` : ''}`;
    return this.httpClient
      .get<IApiResponse<T>>(url)
      .pipe(
        map(response => response.data)
      );
  }
}

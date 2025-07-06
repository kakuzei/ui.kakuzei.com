import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { API_URL } from 'src/environments/config';
import { IApiResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl: string = API_URL;
  private readonly httpClient = inject(HttpClient);

  protected get<T>(resource: string, id?: string, nestedResource?: string): Observable<T> {
    const url = `${this.apiUrl}/${resource}${id ? `/${id}` : ''}${nestedResource ? `/${nestedResource}` : ''}`;
    return this.httpClient.get<IApiResponse<T>>(url).pipe(map((response) => response.data));
  }
}

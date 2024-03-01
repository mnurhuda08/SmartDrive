import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiOptions } from 'src/app/interfaces/common/i-api-options';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, options: IApiOptions): Observable<T> {
    return this.httpClient.get<T>(url, options) as Observable<T>;
  }

  post<T>(url: string, body: any, options: IApiOptions): Observable<T> {
    return this.httpClient.post(url, body, options) as Observable<T>;
  }

  put<T>(url: string, body: any, options: IApiOptions): Observable<T> {
    return this.httpClient.put(url, body, options) as Observable<T>;
  }

  delete<T>(url: string, options: IApiOptions): Observable<T> {
    return this.httpClient.delete(url, options) as Observable<T>;
  }
}

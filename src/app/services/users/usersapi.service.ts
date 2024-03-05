import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiOptions } from 'src/app/interfaces/common/i-api-options';
import { IClaims } from 'src/app/interfaces/users/i-login-claims';

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

  patch<T>(url: string, body: any, options: IApiOptions): Observable<T> {
    return this.httpClient.patch(url, body, options) as Observable<T>;
  }

  delete<T>(url: string, options: IApiOptions): Observable<T> {
    return this.httpClient.delete(url, options) as Observable<T>;
  }

  getAuth<T>(url: string): Observable<T> {
    // Assume you have an API endpoint that returns user roles
    return this.httpClient.get<T>(url);
  }
}

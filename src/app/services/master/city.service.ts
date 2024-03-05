import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { City } from 'src/app/interfaces/master/city';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private apiUrl: string = environment.baseUrl + '/master/city';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.apiUrl);
  }
  getCity(id: number): Observable<City> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.get<City>(url);
  }

  addCity(city: City): Observable<City> {
    return this.http
      .post<City>(this.apiUrl, city, this.httpOptions)
      .pipe(catchError(this.handleError<City>('addCity')));
  }

  updateCity(city: City): any {
    const apiUrl = `${this.apiUrl}/${city.cityId}`;
    return this.http
      .put(apiUrl, city, this.httpOptions)
      .pipe(catchError(this.handleError<City>('updateCity')));
  }

  deleteCity(city: City): Observable<City> {
    const apiUrl = `${this.apiUrl}/${city.cityId}`;

    return this.http
      .delete<City>(apiUrl, this.httpOptions)
      .pipe(catchError(this.handleError<City>('deleteCity id=${city.cityId}')));
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

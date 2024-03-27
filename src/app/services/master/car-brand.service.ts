import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

import { CarBrand } from '../../interfaces/master/car-brand';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CarBrandService {
  private apiUrl: string = environment.baseUrl + '/master/carbrand';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getCarBrands(): Observable<CarBrand[]> {
    return this.http.get<CarBrand[]>(this.apiUrl);
  }
  getCarBrand(id: number): Observable<CarBrand> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.get<CarBrand>(url);
  }

  addCarBrand(carBrand: CarBrand): Observable<CarBrand> {
    return this.http
      .post<CarBrand>(this.apiUrl, carBrand, this.httpOptions)
      .pipe(catchError(this.handleError<CarBrand>('addCarBrand')));
  }

  updateCarBrand(carBrand: CarBrand): any {
    const apiUrl = `${this.apiUrl}/${carBrand.cabrId}`;
    return this.http
      .put(apiUrl, carBrand, this.httpOptions)
      .pipe(catchError(this.handleError<CarBrand>('updateCarBrand')));
  }

  deleteCarBrand(cabrId: number): Observable<CarBrand> {
    const apiUrl = `${this.apiUrl}/${cabrId}`;

    return this.http
      .delete<CarBrand>(apiUrl, this.httpOptions)
      .pipe(
        catchError(
          this.handleError<CarBrand>('deleteCarBrand id=${carBrand.cabrId}')
        )
      );
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

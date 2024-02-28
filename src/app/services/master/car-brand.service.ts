import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

import { CarBrand } from '../../interfaces/master/car-brand';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CarBrandService {
  private apiUrl: string = environment.baseUrl + '/carbrand';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getCarBrands(): Observable<CarBrand[]> {
    return this.http.get<CarBrand[]>(this.apiUrl);
  }

  addCarBrand(carbrand: CarBrand): Observable<CarBrand> {
    return this.http.post<CarBrand>(this.apiUrl, carbrand, this.httpOptions);
  }

  updateCarBrand(carbrand: CarBrand): any {
    return this.http
      .put(this.apiUrl, carbrand, this.httpOptions)
      .pipe(catchError(this.handleError<CarBrand>('updateCarBrand')));
  }

  deleteCarBrand(carbrand: CarBrand): Observable<CarBrand> {
    const apiurl = `${this.apiUrl}/${carbrand.cabrId}`;

    return this.http
      .delete<CarBrand>(apiurl, this.httpOptions)
      .pipe(
        catchError(
          this.handleError<CarBrand>('deleteCarBrand id=${carbrand.id}')
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

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { CarSeries } from 'src/app/interfaces/master/car-series';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CarSeriesService {
  private apiUrl: string = environment.baseUrl + 'master/carseries';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAllCarSeries(): Observable<CarSeries[]> {
    return this.http.get<CarSeries[]>(this.apiUrl);
  }
  getCarSeries(id: number): Observable<CarSeries> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.get<CarSeries>(url);
  }

  addCarSeries(carSeries: CarSeries): Observable<CarSeries> {
    return this.http
      .post<CarSeries>(this.apiUrl, carSeries, this.httpOptions)
      .pipe(catchError(this.handleError<CarSeries>('addCarSeries')));
  }

  updateCarSeries(carSeries: CarSeries): any {
    const apiUrl = `${this.apiUrl}/${carSeries.carsId}`;
    return this.http
      .put(apiUrl, carSeries, this.httpOptions)
      .pipe(catchError(this.handleError<CarSeries>('updateCarSeries')));
  }

  deleteCarSeries(carSeries: CarSeries): Observable<CarSeries> {
    const apiUrl = `${this.apiUrl}/${carSeries.carsId}`;

    return this.http
      .delete<CarSeries>(apiUrl, this.httpOptions)
      .pipe(
        catchError(
          this.handleError<CarSeries>('deleteCarSeries id=${carSeries.id}')
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

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

import { CarModel } from '../../interfaces/master/car-model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CarModelService {
  private apiUrl: string = environment.baseUrl + 'master/carmodel';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getCarModels(): Observable<CarModel[]> {
    return this.http.get<CarModel[]>(this.apiUrl);
  }
  getCarModel(id: number): Observable<CarModel> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.get<CarModel>(url);
  }

  addCarModel(carmodel: CarModel): Observable<CarModel> {
    return this.http
      .post<CarModel>(this.apiUrl, carmodel, this.httpOptions)
      .pipe(catchError(this.handleError<CarModel>('addCarModel')));
  }

  updateCarModel(carModel: CarModel): any {
    const apiUrl = `${this.apiUrl}/${carModel.carmId}`;
    return this.http
      .put(apiUrl, carModel, this.httpOptions)
      .pipe(catchError(this.handleError<CarModel>('updateCarModel')));
  }

  deleteCarModel(carModel: CarModel): Observable<CarModel> {
    const apiUrl = `${this.apiUrl}/${carModel.carmId}`;

    return this.http
      .delete<CarModel>(apiUrl, this.httpOptions)
      .pipe(
        catchError(
          this.handleError<CarModel>('deleteCarModel id=${carmodel.id}')
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

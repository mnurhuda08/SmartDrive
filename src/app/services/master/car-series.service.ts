import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarSeries } from 'src/app/interfaces/master/car-series';

@Injectable({
  providedIn: 'root',
})
export class CarSeriesService {
  private apiUrl: string = 'https://localhost:7114/api/master/carseries';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getCarSeries(): Observable<CarSeries[]> {
    return this.http.get<CarSeries[]>(this.apiUrl);
  }
}

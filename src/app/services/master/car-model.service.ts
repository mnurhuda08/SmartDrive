import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarModel } from 'src/app/interfaces/master/car-model';

@Injectable({
  providedIn: 'root',
})
export class CarModelService {
  private apiUrl: string = 'https://localhost:7114/api/master/carmodel';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getCarBrands(): Observable<CarModel[]> {
    return this.http.get<CarModel[]>(this.apiUrl);
  }
}

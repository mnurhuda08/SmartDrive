import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CarBrand } from '../../interfaces/master/car-brand';

@Injectable({
  providedIn: 'root',
})
export class CarBrandService {
  private apiUrl: string = 'https://localhost:7114/api/master/CarBrand';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getCarBrands(): Observable<CarBrand[]> {
    return this.http.get<CarBrand[]>(this.apiUrl);
  }
}

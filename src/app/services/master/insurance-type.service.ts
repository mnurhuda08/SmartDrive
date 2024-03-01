import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { InsuranceType } from 'src/app/interfaces/master/insurance-type';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class InsuranceTypeService {
  private apiUrl: string = environment.baseUrl + 'master/insurancetype';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getInsuranceTypes(): Observable<InsuranceType[]> {
    return this.http.get<InsuranceType[]>(this.apiUrl);
  }
  getInsuranceType(name: string): Observable<InsuranceType> {
    const url = `${this.apiUrl}/${name}`;

    return this.http.get<InsuranceType>(url);
  }

  addInsuranceType(insuranceType: InsuranceType): Observable<InsuranceType> {
    return this.http
      .post<InsuranceType>(this.apiUrl, insuranceType, this.httpOptions)
      .pipe(catchError(this.handleError<InsuranceType>('addInsuranceType')));
  }

  updateInsuranceType(insuranceType: InsuranceType): any {
    const apiUrl = `${this.apiUrl}/${insuranceType.intyName}`;
    return this.http
      .put(apiUrl, insuranceType, this.httpOptions)
      .pipe(catchError(this.handleError<InsuranceType>('updateInsuranceType')));
  }

  deleteInsuranceType(insuranceType: InsuranceType): Observable<InsuranceType> {
    const apiUrl = `${this.apiUrl}/${insuranceType}`;

    return this.http
      .delete<InsuranceType>(apiUrl, this.httpOptions)
      .pipe(
        catchError(
          this.handleError<InsuranceType>(
            'deleteInsuranceType name=${insuranceType.intyName}'
          )
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

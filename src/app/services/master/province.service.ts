import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Province } from 'src/app/interfaces/master/province';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProvinceService {
  private apiUrl: string = environment.baseUrl + 'master/provinsi';
  private apiUrlPaginate: string =
    environment.baseUrl +
    'master/provinsi//paginate?SearchBy=D&PageNumber=5&PageSize=10';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getProvinces(): Observable<Province[]> {
    return this.http.get<Province[]>(this.apiUrl);
  }

  getProvince(id: number): Observable<Province> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.get<Province>(url);
  }

  addProvince(province: Province): Observable<Province> {
    return this.http
      .post<Province>(this.apiUrl, province, this.httpOptions)
      .pipe(catchError(this.handleError<Province>('addProvince')));
  }

  updateProvince(province: Province): any {
    const apiUrl = `${this.apiUrl}/${province.provId}`;
    return this.http
      .put(apiUrl, province, this.httpOptions)
      .pipe(catchError(this.handleError<Province>('updateProvince')));
  }

  deleteProvince(province: Province): Observable<Province> {
    const apiUrl = `${this.apiUrl}/${province.provId}`;

    return this.http
      .delete<Province>(apiUrl, this.httpOptions)
      .pipe(
        catchError(
          this.handleError<Province>('deleteProvince id=${province.provId}')
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

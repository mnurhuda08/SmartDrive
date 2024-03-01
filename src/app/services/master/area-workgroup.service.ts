import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { AreaWorkgroup } from 'src/app/interfaces/master/area-workgroup';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AreaWorkgroupService {
  private apiUrl: string = environment.baseUrl + 'master/areaworkgroup';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAreaWorkgroups(): Observable<AreaWorkgroup[]> {
    return this.http.get<AreaWorkgroup[]>(this.apiUrl);
  }
  getAreaWorkgroup(code: string): Observable<AreaWorkgroup> {
    const url = `${this.apiUrl}/${code}`;

    return this.http.get<AreaWorkgroup>(url);
  }

  addAreaWorkgroup(areaWorkgroup: AreaWorkgroup): Observable<AreaWorkgroup> {
    return this.http
      .post<AreaWorkgroup>(this.apiUrl, areaWorkgroup, this.httpOptions)
      .pipe(catchError(this.handleError<AreaWorkgroup>('addAreaWorkgroup')));
  }

  updateAreaWorkgroup(areaWorkgroup: AreaWorkgroup): any {
    const apiUrl = `${this.apiUrl}/${areaWorkgroup.arwgCode}`;
    return this.http
      .put(apiUrl, areaWorkgroup, this.httpOptions)
      .pipe(catchError(this.handleError<AreaWorkgroup>('updateAreaWorkgroup')));
  }

  deleteAreaWorkgroup(areaWorkgroup: AreaWorkgroup): Observable<AreaWorkgroup> {
    const apiUrl = `${this.apiUrl}/${areaWorkgroup.arwgCode}`;

    return this.http
      .delete<AreaWorkgroup>(apiUrl, this.httpOptions)
      .pipe(
        catchError(
          this.handleError<AreaWorkgroup>(
            'deleteAreaWorkgroup code=${areaWorkgroup.arwgCode}'
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

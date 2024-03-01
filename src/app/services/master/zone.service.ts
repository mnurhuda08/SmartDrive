import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Zone } from 'src/app/interfaces/master/zone';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ZoneService {
  private apiUrl: string = environment.baseUrl + 'master/zone';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getZones(): Observable<Zone[]> {
    return this.http.get<Zone[]>(this.apiUrl);
  }

  getZone(id: number): Observable<Zone> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.get<Zone>(url);
  }

  addZone(zone: Zone): Observable<Zone> {
    return this.http
      .post<Zone>(this.apiUrl, zone, this.httpOptions)
      .pipe(catchError(this.handleError<Zone>('addZone')));
  }

  updateZone(zone: Zone): any {
    const apiUrl = `${this.apiUrl}/${zone.zonesId}`;
    return this.http
      .put(apiUrl, zone, this.httpOptions)
      .pipe(catchError(this.handleError<Zone>('updateZone')));
  }

  deleteZone(zone: Zone): Observable<Zone> {
    const apiUrl = `${this.apiUrl}/${zone.zonesId}`;

    return this.http
      .delete<Zone>(apiUrl, this.httpOptions)
      .pipe(
        catchError(this.handleError<Zone>('deleteZone id=${zone.zonesId}'))
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

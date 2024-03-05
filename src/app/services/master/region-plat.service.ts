import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { RegionPlat } from 'src/app/interfaces/master/region-plat';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RegionPlatService {
  private apiUrl: string = environment.baseUrl + '/master/regionplat';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getRegionPlats(): Observable<RegionPlat[]> {
    return this.http.get<RegionPlat[]>(this.apiUrl);
  }
  getRegionPlat(code: string): Observable<RegionPlat> {
    const url = `${this.apiUrl}/${code}`;

    return this.http.get<RegionPlat>(url);
  }

  addRegionPlat(regionPlat: RegionPlat): Observable<RegionPlat> {
    return this.http
      .post<RegionPlat>(this.apiUrl, regionPlat, this.httpOptions)
      .pipe(catchError(this.handleError<RegionPlat>('addRegionPlat')));
  }

  updateRegionPlat(regionPlat: RegionPlat): any {
    const apiUrl = `${this.apiUrl}/${regionPlat.regpDesc}`;
    return this.http
      .put(apiUrl, regionPlat, this.httpOptions)
      .pipe(catchError(this.handleError<RegionPlat>('updateRegionPlat')));
  }

  deleteRegionPlat(regionPlat: RegionPlat): Observable<RegionPlat> {
    const apiUrl = `${this.apiUrl}/${regionPlat.regpName}`;

    return this.http
      .delete<RegionPlat>(apiUrl, this.httpOptions)
      .pipe(
        catchError(
          this.handleError<RegionPlat>(
            'deleteRegionPlat name=${regionPlat.regpName}'
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

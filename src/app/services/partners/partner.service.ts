import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { PagingParameter } from 'src/app/constants/PagingParameter';
import { City } from 'src/app/interfaces/master/city';
import { PaginationList } from 'src/app/interfaces/partners/pagination-list';
import { Partner } from 'src/app/interfaces/partners/partner';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  urlApi: string = `${environment.baseUrl}/partner`
  constructor(private http: HttpClient) { }

  getPartners(): Observable<Partner[]>{
    return this.http.get<Partner[]>(`${this.urlApi}`)
  }  

  getPartnersPaging(parameter: PagingParameter): Observable<PaginationList<Partner>> {
    return this.http.get<PaginationList<Partner>>(`${this.urlApi}/paging${parameter.toUrl()}`)
  }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(`${environment.baseUrl}/master/city`)
  }
  
  createPartner(partner: Partner): Observable<Partner> {    
    return this.http.post<Partner>(`${this.urlApi}`, partner, this.httpOptions).pipe(
      catchError(this.handleError<Partner>('addCategory'))
    );
  } 

  updatePartner(partner: Partner): Observable<Partner> {
    return this.http.put<Partner>(`${this.urlApi}/${partner.partEntityid}`, partner, this.httpOptions)
  }

  deletPartner(partnerId: number): Observable<Partner> {
    return this.http.delete<Partner>(`${ this.urlApi }/${partnerId}`)
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

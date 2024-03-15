import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { PagingParameter } from 'src/app/constants/PagingParameter';
import { CreateCustomerRequest } from 'src/app/interfaces/cr/create-customer-request';
import { CreatePolisRequest } from 'src/app/interfaces/cr/create-polis-request';
import { CreateRequestAreaCode } from 'src/app/interfaces/cr/create-request-area-code';
import { CreateRequestCities } from 'src/app/interfaces/cr/create-request-cities';
import { CustomerClaimRequest } from 'src/app/interfaces/cr/customer-claim-request';
import { CustomerCloseRequest } from 'src/app/interfaces/cr/customer-close-request';
import { CustomerRequest } from 'src/app/interfaces/cr/customer-request';
import { PaginationList } from 'src/app/interfaces/cr/pagination-list';
import { RequestPolisAgen } from 'src/app/interfaces/cr/request-polis-agen';
import { RequestPolisCustomer } from 'src/app/interfaces/cr/request-polis-customer';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CustomerRequestService {
  private url: string = "CustomerRequest"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  getCustomerRequests(): Observable<CustomerRequest[]> {
    return this.http.get<CustomerRequest[]>(`${environment.baseUrl}/${this.url}`)
  }

  getCustomerRequest(id: number): Observable<CustomerRequest> {
    const url = `${environment.baseUrl}/${this.url}/${id}`;

    return this.http.get<CustomerRequest>(url);
  }

  createPolis(request: CreatePolisRequest): any {
    return this.http.put(`${environment.baseUrl}/${this.url}/request/polis`, request, this.httpOptions)
      .pipe(
        catchError(this.handleError<CreatePolisRequest>('createPolis'))
      )
  }

  claimPolis(request: CustomerClaimRequest): any {
    return this.http.put(`${environment.baseUrl}/${this.url}/request/claim`, request, this.httpOptions)
      .pipe(
        catchError(this.handleError<CustomerClaimRequest>('claimPolis'))
      )
  }

  closePolis(request: CustomerCloseRequest): any {
    return this.http.put(`${environment.baseUrl}/${this.url}/request/close`, request, this.httpOptions)
      .pipe(
        catchError(this.handleError<CustomerClaimRequest>('closePolis'))
      )
  }

  getCustomerRequestPaging(parameter: PagingParameter): Observable<PaginationList<CustomerRequest>> {
    return this.http.get<PaginationList<CustomerRequest>>(`${environment.baseUrl}/${this.url}/paging${parameter.toUrl()}`)
  }

  createRequestByAgen(request: RequestPolisAgen): Observable<CustomerRequest> {
    return this.http.post<RequestPolisAgen>(`${environment.baseUrl}/${this.url}/request/create/agen`, JSON.stringify(request), this.httpOptions)
      .pipe(
        catchError(this.handleError<RequestPolisAgen>('createRequestByAgen'))
      )
  }

  createRequestByCustomer(request: RequestPolisCustomer): Observable<CustomerRequest> {
    return this.http.post<RequestPolisCustomer>(`${environment.baseUrl}/${this.url}/request/create/customer`, JSON.stringify(request), this.httpOptions)
      .pipe(
        catchError(this.handleError<RequestPolisCustomer>('createRequestByCustomer'))
      )
  }

  getCities(): Observable<CreateRequestCities[]> {
    return this.http.get<CreateRequestCities[]>(`${environment.baseUrl}/master/City`)
  };

  getAreaCode(): Observable<CreateRequestAreaCode[]> {
    return this.http.get<CreateRequestAreaCode[]>(`${environment.baseUrl}/master/AreaWorkgroup`)
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

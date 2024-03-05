import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PaymentTransaction } from 'src/app/models/payment/PaymentTransaction';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PaymentTransactionService {
  url = 'PaymentTransactions';
  constructor(private http: HttpClient) { }

  public getPaymentTransactions(): Observable<PaymentTransaction[]> {
    return this.http.get<PaymentTransaction[]>(
      `${environment.baseUrl}/${this.url}`
    );
  }

  public getPaymentTransactionsCount(userId: number): Observable<number> {
    const countUrl = `${environment.baseUrl}/${this.url}/pagingCount?UserEntityId=${userId}`;
    return this.http.get<number>(countUrl);
  }

  public getPaymentTransactionsPaging(
    userId: number,
    pageNumber: null | number = null,
    pageSize: null | number = null,
    accountNumber: null | string = null,
    accountBussEntity: null | number = null
  ): Observable<{ data: PaymentTransaction[]; count: number }> {
    const url = `${environment.baseUrl}/${this.url}/paging?UserEntityId=${userId}&PageNumber=${pageNumber}&PageSize=${pageSize}`;
    const count = `${environment.baseUrl}/${this.url}/paging?UserEntityId=${userId}`
    return this.http.get<{ data: PaymentTransaction[]; count: number }>(url);
  }

  public createPaymentTransaction(
    PaymentTransaction: PaymentTransaction
  ): Observable<PaymentTransaction[]> {
    return this.http.post<PaymentTransaction[]>(
      `${environment.baseUrl}/${this.url}`,
      PaymentTransaction
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentTransaction } from 'src/app/models/payment/PaymentTransaction';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PaymentTransactionService {
  url = "PaymentTransactions"
  constructor(private http: HttpClient) { }

  public getPaymentTransactions(): Observable<PaymentTransaction[]> {
    return this.http.get<PaymentTransaction[]>(`${environment.baseUrl}/${this.url}`);
  }

  public getPaymentTransactionsByUserId(userId: number): Observable<PaymentTransaction[]> {
    return this.http.get<PaymentTransaction[]>(`${environment.baseUrl}/${this.url}/${userId}`);
  }

  public createPaymentTransaction(PaymentTransaction: PaymentTransaction): Observable<PaymentTransaction[]> {
    return this.http.post<PaymentTransaction[]>(`${environment.baseUrl}/${this.url}`, PaymentTransaction);
  }
}

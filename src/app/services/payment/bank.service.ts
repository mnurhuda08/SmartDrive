import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Bank } from 'src/app/models/payment/bank';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  url = "Banks";


  constructor(private http: HttpClient) { }

  public getBanks(): Observable<Bank[]> {

    return this.http.get<Bank[]>(`${environment.baseUrl}/${this.url}`);
  }

  public createBank(bank: Bank): Observable<Bank[]> {
    return this.http.post<Bank[]>(`${environment.baseUrl}/${this.url}`, bank) ;
  }

  public updateBank(bank: Bank): Observable<Bank[]> {
    return this.http.put<Bank[]>(`${environment.baseUrl}/${this.url}/${bank.bankEntityid}`, bank) ;
  }

  public deleteBank(bank: Bank): Observable<Bank[]> {
    return this.http.delete<Bank[]>(`${environment.baseUrl}/${this.url}/${bank.bankEntityid}`) ;
  }
 
}

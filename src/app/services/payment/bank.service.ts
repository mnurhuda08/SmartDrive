import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  public createBank(bank: Bank): Observable<Bank> {
    return this.http.post<Bank>(`${environment.baseUrl}/${this.url}`, bank);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PartnerBatchInvoiceResponse } from 'src/app/models/payment/bank';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentBatchService {

  url = 'PaymentTransactions';
  urlPartner = `PartnerBatchInvoice`;
  urlEmployee = ``;

  constructor(private http: HttpClient) { }

  public generatePartnerBatchInvoice(): Observable<PartnerBatchInvoiceResponse[]> {
    return this.http.post<PartnerBatchInvoiceResponse[]>(`${environment.baseUrl}/${this.url}/GeneratePartnerTransfer`, {})
  }

  public getPartnerBatchInvoice(): Observable<PartnerBatchInvoiceResponse[]> {
    return this.http.get<PartnerBatchInvoiceResponse[]>(`${environment.baseUrl}/${this.urlPartner}/paging`, {})
  }

}

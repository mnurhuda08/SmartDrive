import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagingParameter } from 'src/app/constants/PagingParameter';
import { PaginationList } from 'src/app/interfaces/partners/pagination-list';
import { PartnerContact } from 'src/app/interfaces/partners/partner-contact';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PartnerContactService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  urlApi: string = `${environment.baseUrl}/PartnerContact`

  constructor(private http: HttpClient) { }

  getPartnerContact(): Observable<PartnerContact[]>{
    return this.http.get<PartnerContact[]>(`${this.urlApi}`)
  }

  getPartnerContactPaging(parameter: PagingParameter): Observable<PaginationList<PartnerContact>> {
    return this.http.get<PaginationList<PartnerContact>>(`${this.urlApi}/paging${parameter.toUrl()}`)
  }

  create(partnerContact: PartnerContact): Observable<PartnerContact> {
    return this.http.post<PartnerContact>(`${this.urlApi}`, partnerContact, this.httpOptions)
  }

  getByPartnerId(partnerId: number): Observable<PartnerContact[]> {
    return this.http.get<PartnerContact[]>(`${this.urlApi}/partner/${partnerId}`)
  }

  update(
    partnerContact: PartnerContact,
    partnerContactId?: {
      pacoPatrnEntityid: number,
      pacoUserEntityid: number
    }): Observable<PartnerContact> {
    return this.http.put<PartnerContact>(`${this.urlApi}/${partnerContactId?.pacoPatrnEntityid}/${partnerContactId?.pacoUserEntityid}`, partnerContact, this.httpOptions)
  }

  delete(pacoPatrnEntityid: number, pacoUserEntityid: number): Observable<PartnerContact> {
    return this.http.delete<PartnerContact>(`${this.urlApi}/${pacoPatrnEntityid}/${pacoUserEntityid}`)
  }
}

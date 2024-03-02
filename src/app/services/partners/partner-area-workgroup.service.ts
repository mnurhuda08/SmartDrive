import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagingParameter } from 'src/app/constants/PagingParameter';
import { AreaWorkgroup } from 'src/app/interfaces/master/area-workgroup';
import { PaginationList } from 'src/app/interfaces/partners/pagination-list';
import { PartnerAreaWorkgroup, PartnerAreaWorkgroupResponse } from 'src/app/interfaces/partners/partner-area-workgroup';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PartnerAreaWorkgroupService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  urlApi: string = `${environment.baseUrl}/PartnerAreaWorkgroup`

  constructor(private http: HttpClient) { }

  getAreaWorkgroup() : Observable<AreaWorkgroup[]>{
    return this.http.get<AreaWorkgroup[]>(`${environment.baseUrl}/master/AreaWorkgroup`);
  }

  getPartnerAreaWorkgroupPaging(parameter: PagingParameter): Observable<PaginationList<PartnerAreaWorkgroupResponse>> {
    return this.http.get<PaginationList<PartnerAreaWorkgroupResponse>>(`${this.urlApi}/paging${parameter.toUrl()}`)
  }

  create(partnerAreaWorkgroup: PartnerAreaWorkgroup): Observable<PartnerAreaWorkgroup> {
    return this.http.post<PartnerAreaWorkgroup>(`${this.urlApi}`, partnerAreaWorkgroup, this.httpOptions)
  }

  update(
    partnerAreaWorkgroup: PartnerAreaWorkgroup,    
    partnerAreaWorkgroupId ?: { 
      pawoPatrEntityid: number,
      pawoArwgCode: string,
      pawoUserEntityid: number
    } 
  ): Observable<PartnerAreaWorkgroup> {
    const url: string = `${this.urlApi}/${partnerAreaWorkgroupId?.pawoPatrEntityid}/${partnerAreaWorkgroupId?.pawoUserEntityid}/${partnerAreaWorkgroupId?.pawoArwgCode}`
    return this.http.put<PartnerAreaWorkgroup>(url, partnerAreaWorkgroup, this.httpOptions)
  }

  delete(pawoPatrEntityid: number, pawoUserEntityid: number, pawoArwgCode: string): Observable<PartnerAreaWorkgroup> {
    const url: string = `${this.urlApi}/${pawoPatrEntityid}/${pawoUserEntityid}/${pawoArwgCode}`
    return this.http.delete<PartnerAreaWorkgroup>(`${url}`, this.httpOptions)
  }
}

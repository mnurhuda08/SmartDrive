import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagingParameter } from 'src/app/constants/PagingParameter';
import { PaginationList } from 'src/app/interfaces/partners/pagination-list';
import { PartnerWorkOrder } from 'src/app/interfaces/partners/partner-work-order';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PartnerWorkOrderService {
  constructor(private http: HttpClient) { }

  getWorkOrderPaging(seroPartId: number, seotArwgCode: string, parameter: PagingParameter): Observable<PaginationList<PartnerWorkOrder>> {
    return this.http.get<PaginationList<PartnerWorkOrder>>(`${environment.baseUrl}/partner/workorder/paging${parameter.toUrl()}&seroPartId=${seroPartId}&seotArwgCode=${seotArwgCode}`)
  }
}

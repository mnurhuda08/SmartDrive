import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClaimAssetEvidence } from 'src/app/interfaces/partners/claim-assets-evidence';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClaimAssetEvidenceService {
  urlApi : string = `${environment.baseUrl}/PartnerClaimAssetEvidence`
  constructor(private http: HttpClient) { }

  create(data: FormData, sowoId: number): Observable<ClaimAssetEvidence>{    
    return this.http.post<ClaimAssetEvidence>(`${this.urlApi}/batch/${sowoId}`, data)
  }

  getEvidence(caspPartEntityid : number, caspSeroId: string): Observable<ClaimAssetEvidence[]> {
    return this.http.get<ClaimAssetEvidence[]>(`${this.urlApi}/${caspPartEntityid}/${caspSeroId}`)
  }
}

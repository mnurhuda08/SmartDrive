import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClaimAssetsSparepart } from 'src/app/interfaces/partners/claim-assets-sparepart';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClaimAssetSparepartService {

  urlApi : string = `${environment.baseUrl}/PartnerClaimAssetSparepart`
  constructor(private http: HttpClient) { }

  getSparepart(caspSeroId: string, caspPartEntityid: number): Observable<ClaimAssetsSparepart[]> {
    return this.http.get<ClaimAssetsSparepart[]>(`${this.urlApi}/${caspPartEntityid}/${caspSeroId}`)
  }

  createSparePart(claimSparePart: ClaimAssetsSparepart[], sowoId: number): Observable<ClaimAssetsSparepart[]> {
    var body = {
      sowoId,
      data: claimSparePart
    }
    return this.http.post<ClaimAssetsSparepart[]>(`${this.urlApi}/batch`, body)
  }
}

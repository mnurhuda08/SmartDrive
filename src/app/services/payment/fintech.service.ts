
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Fintech } from 'src/app/models/payment/Fintech';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class FintechService {
  url = "Fintechs";
  constructor(private http: HttpClient) { }


  public getFintechs(): Observable<Fintech[]> {

    return this.http.get<Fintech[]>(`${environment.baseUrl}/${this.url}`);
  }

  public createFintech(fintech: Fintech): Observable<Fintech[]> {
    return this.http.post<Fintech[]>(`${environment.baseUrl}/${this.url}`, fintech);
  }

  public updateFintech(fintech: Fintech): Observable<Fintech[]> {
    return this.http.put<Fintech[]>(`${environment.baseUrl}/${this.url}/${fintech.fintEntityid}`, fintech);
  }

  public deleteFintech(fintech: Fintech): Observable<Fintech[]> {
    return this.http.delete<Fintech[]>(`${environment.baseUrl}/${this.url}/${fintech.fintEntityid}`);
  }
}

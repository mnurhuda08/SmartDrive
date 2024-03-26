import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserApiService } from '../users/usersapi.service';
import { Observable } from 'rxjs';
import { UserAccount } from 'src/app/models/payment/PaymentTransaction';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  url: string = 'UserAccounts/GetAllByUserId';
  constructor(private apiService: UserApiService) { }

  getUserAccount = (id: number): Observable<{ data: UserAccount[] }> => {
    return this.apiService.get(`${environment.baseUrl}/${this.url}/${id}`, {
      responseType: 'json',
    });
  };
}

import { Injectable } from '@angular/core';
import { UserApiService } from './usersapi.service';
import { Observable } from 'rxjs';
import {
  IUserAccount,
  IUserAccountBank,
  IUserAccountFintech,
} from 'src/app/interfaces/users/i-user-account';

@Injectable({
  providedIn: 'root',
})
export class UserAccountService {
  constructor(private apiService: UserApiService) {}

  getUserAccount = (url: string): Observable<IUserAccount[]> => {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  };

  getFintechs = (url: string): Observable<IUserAccountFintech[]> => {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  };

  getBanks = (url: string): Observable<IUserAccountBank[]> => {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  };

  addUserAccount = (url: string, body: any): Observable<any> => {
    return this.apiService.post(url, body, {});
  };

  editUserAccount = (url: string, body: any): Observable<any> => {
    return this.apiService.put(url, body, {});
  };

  deleteUserAccount = (url: string): Observable<any> => {
    return this.apiService.delete(url, {});
  };
}

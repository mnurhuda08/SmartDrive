import { Injectable } from '@angular/core';
import { UserApiService } from './usersapi.service';
import { IUserPhone } from 'src/app/interfaces/users/i-user-phone';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserPhoneService {
  constructor(private apiService: UserApiService) {}

  getUserPhones = (url: string): Observable<IUserPhone[]> => {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  };

  addUserPhone = (url: string, body: any): Observable<any> => {
    return this.apiService.post(url, body, {});
  };

  editUserPhone = (url: string, body: any): Observable<any> => {
    return this.apiService.put(url, body, {});
  };

  deleteUserPhone = (url: string): Observable<any> => {
    return this.apiService.delete(url, {});
  };
}

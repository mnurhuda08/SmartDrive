import { Injectable } from '@angular/core';
import { UserApiService } from './usersapi.service';
import {
  IUserAddress,
  IUserAddressCity,
} from 'src/app/interfaces/users/i-user-address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAddressService {
  constructor(private apiService: UserApiService) {}

  getUserAddress = (url: string): Observable<IUserAddress[]> => {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  };

  getCities = (url: string): Observable<IUserAddressCity[]> => {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  };

  addUserAddress = (url: string, body: any): Observable<any> => {
    return this.apiService.post(url, body, {});
  };

  editUserAddress = (url: string, body: any): Observable<any> => {
    return this.apiService.put(url, body, {});
  };

  deleteUserAddress = (url: string): Observable<any> => {
    return this.apiService.delete(url, {});
  };
}

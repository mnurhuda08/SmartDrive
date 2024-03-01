import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IApiOptions,
  PaginationParams,
} from 'src/app/interfaces/common/i-api-options';
import { IUser, IUsers } from 'src/app/interfaces/users/i-user';
import { UserApiService } from './usersapi.service';
import { IClaims } from 'src/app/interfaces/users/i-login-claims';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiService: UserApiService) {}

  getUsers = (url: string): Observable<IUser[]> => {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  };

  getUsersPaging = (
    url: string,
    params: PaginationParams
  ): Observable<IUser[]> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  };

  getUserById = (url: string): Observable<IUser> => {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  };

  addUser = (url: string, body: any): Observable<any> => {
    return this.apiService.post(url, body, {});
  };

  editUser = (url: string, body: any): Observable<any> => {
    return this.apiService.put(url, body, {});
  };

  deleteUser = (url: string): Observable<any> => {
    return this.apiService.delete(url, {});
  };
}

import { Injectable } from '@angular/core';
import { IUserRole } from 'src/app/interfaces/users/i-user-role';
import { UserApiService } from './usersapi.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserRoleService {
  constructor(
    private apiService: UserApiService,
    private httpClient: HttpClient
  ) {}

  getUserRoles = (url: string): Observable<IUserRole[]> => {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  };

  addUserRole = (url: string, body: any): Observable<any> => {
    return this.apiService.post(url, body, {});
  };

  editUserRole = (url: string, body: any): Observable<any> => {
    return this.apiService.put(url, body, {});
  };

  deleteUserRole = (url: string, body: any): Observable<any> => {
    return this.httpClient.delete(url, { body: body }) as Observable<any>;
  };
}

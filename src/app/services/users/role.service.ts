import { Injectable } from '@angular/core';
import { UserApiService } from './usersapi.service';
import { Observable } from 'rxjs';
import { IRole } from 'src/app/interfaces/users/i-role';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private apiService: UserApiService) {}

  getRoles = (url: string): Observable<IRole[]> => {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  };

  addRole = (url: string, body: any): Observable<any> => {
    return this.apiService.post(url, body, {});
  };

  editRole = (url: string, body: any): Observable<any> => {
    return this.apiService.put(url, body, {});
  };

  deleteRole = (url: string): Observable<any> => {
    return this.apiService.delete(url, {});
  };
}

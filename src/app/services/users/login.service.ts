import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserApiService } from './usersapi.service';
import { IClaims } from 'src/app/interfaces/users/i-login-claims';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private apiService: UserApiService) {}

  login = (url: string, body: any): Observable<any> => {
    return this.apiService.post(url, body, {});
  };

  logout = (url: string, body: any): Observable<any> => {
    return this.apiService.delete(url, body);
  };

  getMe = (url: string): Observable<IClaims> => {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  };
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ILogin } from 'src/app/interfaces/users/i-login';
import { ILoginClaims } from 'src/app/interfaces/users/i-login-claims';
import { LoginService } from 'src/app/services/users/login.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  loginObj: ILogin = {
    userName: '',
    userPassword: '',
  };

  onSubmit() {
    this.loginUser(this.loginObj);
  }

  loginUser(data: ILogin) {
    this.loginService
      .login(`${environment.baseUrl}/Auth/Login`, data)
      .subscribe({
        next: (res: ILoginClaims) => {
          this.toaster.success('Login success');

          localStorage.setItem('accessToken', res.accessToken as string);
          this.router.navigateByUrl('/');
        },
        error: (error) => {
          if (error.status === 400 && !error.error.Message) {
            this.toaster.error('Username and password is required');
          } else {
            this.toaster.error(error.error.Message);
          }
        },
      });
  }
}

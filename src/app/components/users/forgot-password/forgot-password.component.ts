import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IForgotPassword } from 'src/app/interfaces/users/i-user';
import { UserService } from 'src/app/services/users/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  constructor(
    private userService: UserService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  forgotPasswordForm: IForgotPassword = {
    userName: '',
    userBirthPlace: '',
    userNationalId: '',
    userNpwp: '',
    newPassword: '',
    confirmNewPassword: '',
  };

  onSubmit() {
    this.forgotPassword(this.forgotPasswordForm);
  }

  forgotPassword(data: IForgotPassword) {
    this.userService
      .editUser(`${environment.baseUrl}/User/ForgotPassword`, data)
      .subscribe({
        next: (res) => {
          this.toaster.success('Update Password Success');
          this.router.navigateByUrl('/login');
        },
        error: (error) => {
          this.toaster.error(error.error.Message || error);
        },
      });
  }
}

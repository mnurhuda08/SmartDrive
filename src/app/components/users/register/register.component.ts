import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IRegisterUser } from 'src/app/interfaces/users/i-user';
import { UserService } from 'src/app/services/users/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private userService: UserService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  registerForm: IRegisterUser = {
    userName: '',
    userFullName: '',
    userPassword: '',
    userEmail: '',
    userBirthPlace: '',
    userBirthDate: '',
    userNationalId: '',
    userNpwp: '',
    roleName: 'PC',
    isRoleActive: true,
  };

  onSubmit() {
    this.registerUser(this.registerForm);
  }

  registerUser(data: IRegisterUser) {
    this.userService
      .addUser(`${environment.baseUrl}/User/Register`, data)
      .subscribe({
        next: (res) => {
          this.toaster.success('Register Success');
          this.router.navigateByUrl('/login');
        },
        error: (error) => {
          console.log(error);
          if (error.status === 400 && !error.error.Message) {
            this.toaster.error('Make sure to complete the registration form');
          } else {
            this.toaster.error(error.error.Message || error);
          }
        },
      });
  }
}

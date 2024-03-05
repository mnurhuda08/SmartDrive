import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IRole } from 'src/app/interfaces/users/i-role';
import { IRegisterUser } from 'src/app/interfaces/users/i-user';
import { RoleService } from 'src/app/services/users/role.service';
import { UserService } from 'src/app/services/users/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  imports: [FormsModule, CommonModule],
  standalone: true,
})
export class AddUserComponent {
  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  @Input() display!: string;

  roles: IRole[] = [];

  registerForm: IRegisterUser = {
    userName: '',
    userFullName: '',
    userPassword: '',
    userEmail: '',
    userBirthPlace: '',
    userBirthDate: '',
    userNationalId: '',
    userNpwp: '',
    roleName: '',
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

  fetchRoles() {
    this.roleService.getRoles(`${environment.baseUrl}/Role`).subscribe({
      next: (data) => {
        this.roles = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.fetchRoles();
  }
}

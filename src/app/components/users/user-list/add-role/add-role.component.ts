import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IRole } from 'src/app/interfaces/users/i-role';
import { IUser } from 'src/app/interfaces/users/i-user';
import { IUserRole } from 'src/app/interfaces/users/i-user-role';
import { RoleService } from 'src/app/services/users/role.service';
import { UserRoleService } from 'src/app/services/users/user-role.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class AddRoleComponent {
  constructor(
    private roleService: RoleService,
    private userRoleService: UserRoleService,
    private toaster: ToastrService
  ) {}

  @Input() display!: string;
  @Input() user!: IUser | undefined;

  roles: IRole[] = [];

  formUserRole: IUserRole = {
    usroEntityid: 0,
    usroRoleName: '',
    usroStatus: 'ACTIVE',
  };

  onSubmit() {
    this.addUserRole(this.formUserRole);
  }

  addUserRole(userRole: IUserRole) {
    console.log('this.formUserRole: ', this.formUserRole);
    this.userRoleService
      .addUserRole(`${environment.baseUrl}/UserRoles`, userRole)
      .subscribe({
        next: (data) => {
          console.log('data insert', data);
          this.user?.userRoles?.push(data);
          this.formUserRole = {
            usroRoleName: '',
            usroStatus: 'ACTIVE',
          };
          this.toaster.success('Success assigning role');
        },
        error: (error) => {
          console.log(error);
          this.toaster.error(error.error.Message || error);
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

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (this.user) {
      this.formUserRole.usroEntityid = this.user?.userEntityid;
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/interfaces/users/i-user';
import { UserService } from 'src/app/services/users/user.service';
import { environment } from 'src/environments/environment';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddRoleComponent } from './add-role/add-role.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    NgxPaginationModule,
    AddUserComponent,
    ManageRolesComponent,
    AddRoleComponent,
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  constructor(
    private userService: UserService,
    private toaster: ToastrService
  ) {}

  users: IUser[] = [];
  p: number = 1;

  selectedUser: IUser | undefined;

  displayAddModal = 'displayAddUserModal';
  displayManageRoleModal = 'displayManageRoleModal';
  displayAddUserRoleModal = 'displayAddUserRoleModal';

  onPopModalEdit(user: IUser) {
    this.selectedUser = user;
  }

  getUsers(page: number = 1, perPage: number = 10) {
    let url = `${environment.baseUrl}/User`;
    this.userService.getUsers(url).subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getUsers(1, 10);
  }
}

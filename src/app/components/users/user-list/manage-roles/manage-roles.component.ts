import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/interfaces/users/i-user';
import { UserRoleService } from 'src/app/services/users/user-role.service';
import { environment } from 'src/environments/environment';
import { AddRoleComponent } from '../add-role/add-role.component';

@Component({
  selector: 'app-manage-roles',
  templateUrl: './manage-roles.component.html',
  styleUrls: ['./manage-roles.component.css'],
  standalone: true,
  imports: [CommonModule, AddRoleComponent],
})
export class ManageRolesComponent {
  constructor(
    private userRoleService: UserRoleService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  @Input() display!: string;
  @Input() displayAddRole!: string;
  @Input() user!: IUser | undefined;
  displayAddUserRoleModal = 'displayAddUserRoleModal';

  onConfirmDelete(userId: number, roleName: string) {
    if (!this.user?.userEntityid) return;

    if (confirm('Are you sure to delete? ')) {
      this.deleteUserRole(userId, roleName);
    }
  }

  onConfirmUpdateStatus(userId: number, roleName: string) {
    if (!this.user?.userEntityid) return;

    if (confirm('Are you sure want to update role status? ')) {
      this.updateStatusUserRole(userId, roleName);
    }
  }

  updateStatusUserRole(userId: number, roleName: string) {
    this.userRoleService
      .editUserRole(`${environment.baseUrl}/UserRoles/${userId}`, {
        usroRoleName: roleName,
      })
      .subscribe({
        next: (res) => {
          this.toaster.success(res.message);
          window.location.reload();
        },
        error: (error) => {
          this.toaster.error(error.error.Message || error);
        },
      });
  }

  deleteUserRole(userId: number, roleName: string) {
    this.userRoleService
      .deleteUserRole(`${environment.baseUrl}/UserRoles/${userId}`, {
        usroRoleName: roleName,
      })
      .subscribe({
        next: (res) => {
          this.toaster.success('Delete role success');
          window.location.reload();
        },
        error: (error) => {
          this.toaster.error(error.error.Message || error);
        },
      });
  }
}

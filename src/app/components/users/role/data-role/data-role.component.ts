import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IRole } from 'src/app/interfaces/users/i-role';
import { RoleService } from 'src/app/services/users/role.service';
import { environment } from 'src/environments/environment';
import { EditRolePopupComponent } from '../edit-role-popup/edit-role-popup.component';
import { AddRolePopupComponent } from '../add-role-popup/add-role-popup.component';

@Component({
  selector: 'app-data-role',
  templateUrl: './data-role.component.html',
  styleUrls: ['./data-role.component.css'],
  standalone: true,
  imports: [CommonModule, EditRolePopupComponent, AddRolePopupComponent],
})
export class DataRoleComponent {
  constructor(
    private roleService: RoleService,
    private toaster: ToastrService
  ) {}
  roles: IRole[] = [];

  selectedRole: IRole = {
    roleName: '',
    roleDescription: '',
  };

  displayAddModal = 'displayAddRoleModal';
  displayEditModal = 'displayEditRoleModal';

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

  onPopModalEdit(data: IRole) {
    this.selectedRole = data;
  }

  onConfirmAdd(data: IRole) {
    this.addRole(data);
  }

  onConfirmEdit(data: IRole) {
    if (!this.selectedRole.roleName) return;
    this.editRole(data, this.selectedRole.roleName ?? '');
  }

  onConfirmDelete(roleName: string | undefined) {
    if (!roleName) return;

    if (confirm('Are you sure to delete ')) {
      this.deleteRole(roleName);
    }
  }

  addRole(data: IRole) {
    this.roleService.addRole(`${environment.baseUrl}/Role`, data).subscribe({
      next: (res) => {
        this.fetchRoles();
        this.toaster.success('Role successfully added');
      },
      error: (error) => {
        this.toaster.error(error.error.Message || error);
        this.fetchRoles();
      },
    });
  }

  editRole(data: IRole, roleName: string) {
    this.roleService
      .editRole(`${environment.baseUrl}/Role/${roleName}`, data)
      .subscribe({
        next: (res) => {
          this.fetchRoles();
          this.toaster.success('Role updated successfully');
        },
        error: (error) => {
          this.fetchRoles();
          this.toaster.error(error.error.Message);
        },
      });
  }

  deleteRole(roleName: string) {
    this.roleService
      .deleteRole(`${environment.baseUrl}/Role/${roleName}`)
      .subscribe({
        next: (res) => {
          this.fetchRoles();
          this.toaster.success('Data deleted successfully');
        },
        error: (error) => {
          this.fetchRoles();
          this.toaster.error(error.error.Message);
        },
      });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.fetchRoles();
  }
}

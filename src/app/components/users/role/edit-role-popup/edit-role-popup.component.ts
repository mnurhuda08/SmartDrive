import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IRole } from 'src/app/interfaces/users/i-role';

@Component({
  selector: 'app-edit-role-popup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-role-popup.component.html',
  styleUrls: ['./edit-role-popup.component.css'],
})
export class EditRolePopupComponent {
  constructor() {}

  @Output() confirm = new EventEmitter<IRole>();
  @Input() display!: string;

  @Input() role: IRole = {
    roleName: '',
    roleDescription: '',
  };

  formRole: IRole = {
    roleName: '',
    roleDescription: '',
  };

  onConfirm() {
    console.log(this.formRole);
    this.confirm.emit({
      roleName: this.role.roleName,
      roleDescription: this.formRole.roleDescription,
    });
  }
}

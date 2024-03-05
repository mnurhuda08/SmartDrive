import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IRole } from 'src/app/interfaces/users/i-role';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-role-popup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-role-popup.component.html',
  styleUrls: ['./add-role-popup.component.css'],
})
export class AddRolePopupComponent {
  constructor() {}

  @Output() confirm = new EventEmitter<IRole>();
  @Input() display!: string;

  @Input() role: IRole = {
    roleName: '',
    roleDescription: '',
  };

  onConfirm() {
    this.confirm.emit(this.role);
  }
}

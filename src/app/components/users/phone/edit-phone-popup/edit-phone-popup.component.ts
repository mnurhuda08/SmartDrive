import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUserPhone } from 'src/app/interfaces/users/i-user-phone';

@Component({
  selector: 'app-edit-phone-popup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-phone-popup.component.html',
  styleUrls: ['./edit-phone-popup.component.css'],
})
export class EditPhonePopupComponent {
  @Output() confirm = new EventEmitter<IUserPhone>();
  @Input() display!: string;

  @Input() userPhone: IUserPhone = {
    usphPhoneNumber: '',
    usphPhoneType: '',
    usphMime: '',
    usphStatus: '',
  };

  onConfirm() {
    this.confirm.emit(this.userPhone);
  }
}

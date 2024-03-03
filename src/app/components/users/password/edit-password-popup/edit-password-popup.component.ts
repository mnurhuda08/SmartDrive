import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IClaims } from 'src/app/interfaces/users/i-login-claims';
import { IUpdatePassword } from 'src/app/interfaces/users/i-update-password';
import { UserService } from 'src/app/services/users/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-password-popup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-password-popup.component.html',
  styleUrls: ['./edit-password-popup.component.css'],
})
export class EditPasswordPopupComponent {
  constructor(
    private router: Router,
    private toaster: ToastrService,
    private userService: UserService
  ) {}

  @Input() currentUserId!: string;

  passwordForm: IUpdatePassword = {
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  };

  onSubmit() {
    this.updatePassword(this.passwordForm);
  }

  updatePassword(data: IUpdatePassword) {
    this.userService
      .editUser(
        `${environment.baseUrl}/User/UpdatePassword/${this.currentUserId}`,
        data
      )
      .subscribe({
        next: (res) => {
          this.toaster.success('Update Password Success');
        },
        error: (error) => {
          // this.toaster.error(error);
        },
      });
  }
}

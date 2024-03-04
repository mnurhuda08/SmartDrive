import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUpdateEmail } from 'src/app/interfaces/users/i-update-password';
import { UserService } from 'src/app/services/users/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-email-popup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-email-popup.component.html',
  styleUrls: ['./edit-email-popup.component.css'],
})
export class EditEmailPopupComponent {
  constructor(
    private userService: UserService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  @Input() userEmail: string = '';
  @Input() userId: number | undefined;

  emailForm: IUpdateEmail = {
    userEmail: '',
  };

  onSubmit() {
    this.onUpdateEmail(this.emailForm);
  }

  onUpdateEmail(data: IUpdateEmail) {
    this.userService
      .editUser(`${environment.baseUrl}/User/UpdateEmail/${this.userId}`, data)
      .subscribe({
        next: (res) => {
          this.toaster.success('Update Email Success');
          this.userEmail = res.userEmail;
          window.location.reload();
        },
        error: (error) => {
          console.log('error emaikl:L ', error);
          this.toaster.error(error.error.Message);
        },
      });
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (this.userEmail) {
      this.emailForm.userEmail = this.userEmail;
    }
  }
}

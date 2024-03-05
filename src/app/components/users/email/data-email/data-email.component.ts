import { Component, Input } from '@angular/core';
import { EditEmailPopupComponent } from '../edit-email-popup/edit-email-popup.component';
import { UserService } from 'src/app/services/users/user.service';
import { IUser } from 'src/app/interfaces/users/i-user';
import { environment } from 'src/environments/environment';
import { IClaims } from 'src/app/interfaces/users/i-login-claims';
import { CommonModule } from '@angular/common';
import { IUpdateEmail } from 'src/app/interfaces/users/i-update-password';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-data-email',
  standalone: true,
  imports: [EditEmailPopupComponent, CommonModule],
  templateUrl: './data-email.component.html',
  styleUrls: ['./data-email.component.css'],
})
export class DataEmailComponent {
  constructor(
    private userService: UserService,
    private toaster: ToastrService
  ) {}

  @Input() currentUser!: IClaims;

  user!: IUser;

  getUser(userId: string) {
    this.userService
      .getUserById(`${environment.baseUrl}/User/${userId}`)
      .subscribe({
        next: (data) => {
          this.user = data;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  ngOnChanges(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.currentUser) {
      this.getUser(this.currentUser.sub);
    }
  }
}

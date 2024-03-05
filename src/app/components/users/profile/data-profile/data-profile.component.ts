import { Component, Input } from '@angular/core';
import { EditProfilePopupComponent } from '../edit-profile-popup/edit-profile-popup.component';
import { UserService } from 'src/app/services/users/user.service';
import { ToastrService } from 'ngx-toastr';
import { IClaims } from 'src/app/interfaces/users/i-login-claims';
import { IUpdateProfile, IUser } from 'src/app/interfaces/users/i-user';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { RolenamePipe } from 'src/app/pipes/rolename.pipe';

@Component({
  selector: 'app-data-profile',
  standalone: true,
  imports: [EditProfilePopupComponent, CommonModule, RolenamePipe],
  templateUrl: './data-profile.component.html',
  styleUrls: ['./data-profile.component.css'],
})
export class DataProfileComponent {
  constructor(private service: UserService, private toaster: ToastrService) {}

  @Input() currentUser!: IClaims;

  baseUrlResources = environment.resources;
  dateNow = Date.now();

  user!: IUser;

  onConfirmEdit(userProfile: IUpdateProfile) {
    if (!this.currentUser.sub) return;
    this.updateProfile(userProfile, +this.currentUser.sub ?? 0);
  }

  getUser(userId: string) {
    this.service
      .getUserById(`${environment.baseUrl}/User/${userId}`)
      .subscribe({
        next: (data) => {
          this.user = data;
        },
        error: (error) => {
          console.log('error get user: ', error);
        },
      });
  }

  updateProfile(userProfile: IUpdateProfile, userId: number) {
    this.service
      .patchUser(
        `${environment.baseUrl}/User/UpdateProfile/${userId}`,
        userProfile
      )
      .subscribe({
        next: (res) => {
          this.getUser(this.currentUser.sub);
          this.toaster.success('Profile successfully updated');
          window.location.reload();
        },
        error: (error) => {
          this.getUser(this.currentUser.sub);
          this.toaster.error(error.error.Message);
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

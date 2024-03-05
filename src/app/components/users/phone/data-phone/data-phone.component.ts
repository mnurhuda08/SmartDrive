import { Component, Input } from '@angular/core';
import { EditPhonePopupComponent } from '../edit-phone-popup/edit-phone-popup.component';
import { UserService } from 'src/app/services/users/user.service';
import { IUser, IUsers } from 'src/app/interfaces/users/i-user';
import { ToastrService } from 'ngx-toastr';
import { IUserPhone } from 'src/app/interfaces/users/i-user-phone';
import { UserPhoneService } from 'src/app/services/users/user-phone.service';
import { environment } from 'src/environments/environment';
import { IClaims } from 'src/app/interfaces/users/i-login-claims';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-phone',
  standalone: true,
  imports: [EditPhonePopupComponent, CommonModule],
  templateUrl: './data-phone.component.html',
  styleUrls: ['./data-phone.component.css'],
})
export class DataPhoneComponent {
  constructor(
    private service: UserPhoneService,
    private toaster: ToastrService
  ) {}

  @Input() currentUser!: IClaims;

  displayAddModal = 'displayAddPhoneModal';
  displayEditModal = 'displayEditPhoneModal';

  userPhones: IUserPhone[] = [];

  selectedUserPhone: IUserPhone = {
    usphEntityid: 0,
    usphPhoneNumber: '',
    usphPhoneType: '',
    usphMime: '',
    usphStatus: '',
  };

  currentUserPhone: string = '';

  edit(userPhone: IUserPhone, currentPhoneNumber: string | undefined) {
    this.selectedUserPhone = userPhone;
    this.currentUserPhone = currentPhoneNumber!;
  }

  onConfirmAdd(userPhone: IUserPhone) {
    this.addUserPhone(userPhone);
  }

  onConfirmEdit(userPhone: IUserPhone) {
    if (!this.selectedUserPhone.usphEntityid) return;
    this.editUserPhone(
      userPhone,
      this.selectedUserPhone.usphEntityid ?? 0,
      this.currentUserPhone!
    );
  }

  onConfirmDelete(
    userId: number | undefined,
    currentPhoneNumber: string | undefined
  ) {
    if (!userId) return;

    if (confirm('Are you sure to delete ' + currentPhoneNumber)) {
      this.deletePhone(userId, currentPhoneNumber as string);
    }
  }

  getUserPhones(userId: string) {
    this.service
      .getUserPhones(`${environment.baseUrl}/UserPhone/GetAllById/${userId}`)
      .subscribe((data) => {
        this.userPhones = data;
      });
  }

  addUserPhone(userPhone: IUserPhone) {
    this.service
      .addUserPhone(`${environment.baseUrl}/UserPhone`, userPhone)
      .subscribe({
        next: (res) => {
          this.getUserPhones(this.currentUser.sub);
          this.toaster.success('Data successfully added');
        },
        error: (error) => {
          this.toaster.error(error.error.Message);
        },
      });
  }

  editUserPhone(
    userPhone: IUserPhone,
    userId: number,
    currentPhoneNumber: string
  ) {
    this.service
      .editUserPhone(
        `${environment.baseUrl}/UserPhone/${userId}/${currentPhoneNumber}`,
        userPhone
      )
      .subscribe({
        next: (res) => {
          this.getUserPhones(this.currentUser.sub);
          this.toaster.success('Phone updated successfully');
        },
        error: (error) => {
          this.getUserPhones(this.currentUser.sub);
          this.toaster.error(error.error.Message);
        },
      });
  }

  deletePhone(userId: number, currentPhoneNumber: string) {
    this.service
      .deleteUserPhone(
        `${environment.baseUrl}/UserPhone/${userId}/${currentPhoneNumber}`
      )
      .subscribe({
        next: (res) => {
          this.getUserPhones(this.currentUser.sub);
          this.toaster.success('Data deleted successfully');
        },
        error: (error) => {
          this.getUserPhones(this.currentUser.sub);
          this.toaster.error(error.error.Message);
        },
      });
  }

  ngOnChanges(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.currentUser) {
      this.getUserPhones(this.currentUser.sub);
    }
  }
}

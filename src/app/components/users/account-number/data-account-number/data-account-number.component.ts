import { Component, Input } from '@angular/core';
import { EditAccountNumberPopupComponent } from '../edit-account-number-popup/edit-account-number-popup.component';
import { UserAccountService } from 'src/app/services/users/user-account.service';
import { ToastrService } from 'ngx-toastr';
import { IClaims } from 'src/app/interfaces/users/i-login-claims';
import { IUserAccount } from 'src/app/interfaces/users/i-user-account';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-account-number',
  standalone: true,
  imports: [EditAccountNumberPopupComponent, CommonModule],
  templateUrl: './data-account-number.component.html',
  styleUrls: ['./data-account-number.component.css'],
})
export class DataAccountNumberComponent {
  constructor(
    private service: UserAccountService,
    private toaster: ToastrService
  ) {}

  @Input() currentUser!: IClaims;

  displayAddModal = 'displayAddAccountModal';

  userAccounts: IUserAccount[] = [];

  selectedUserAccount: IUserAccount = {
    usacId: 0,
    usacAccountno: '',
    usacType: '',
    usacBankEntityid: null,
    usacFintEntityid: null,
    usacUserEntityid: 0,
  };

  onConfirmAdd(userAccount: IUserAccount) {
    userAccount.usacUserEntityid = +this.currentUser.sub;
    this.addUserAccount(userAccount);
  }

  onConfirmDelete(usacId: number | undefined) {
    if (!usacId) return;

    if (confirm('Are you sure to delete ')) {
      this.deleteAccount(usacId);
    }
  }

  getuserAccounts(userId: string) {
    this.service
      .getUserAccount(`${environment.baseUrl}/UserAccounts`)
      .subscribe({
        next: (data) => {
          console.log('datas: ', data);
          this.userAccounts = data;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  addUserAccount(userAccount: IUserAccount) {
    this.service
      .addUserAccount(`${environment.baseUrl}/UserAccounts`, userAccount)
      .subscribe({
        next: (res) => {
          this.getuserAccounts(this.currentUser.sub);
          this.toaster.success('Account successfully added');
        },
        error: (error) => {
          this.toaster.error(error.error.Message);
          this.getuserAccounts(this.currentUser.sub);
        },
      });
  }

  deleteAccount(usacId: number) {
    this.service
      .deleteUserAccount(`${environment.baseUrl}/UserAccounts/${usacId}`)
      .subscribe({
        next: (res) => {
          console.log('delted: ', res);
          this.getuserAccounts(this.currentUser.sub);
          this.toaster.success('Data deleted successfully');
        },
        error: (error) => {
          this.getuserAccounts(this.currentUser.sub);
          if (error.status > 399) {
            this.toaster.error(error.error.Message);
          }
          if (error.status < 300) {
            this.toaster.success('Data deleted successfully');
          }
        },
      });
  }

  ngOnChanges(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.currentUser) {
      this.getuserAccounts(this.currentUser.sub);
    }
  }
}

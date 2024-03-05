import { Component, Input } from '@angular/core';
import { EditAddressPopupComponent } from '../edit-address-popup/edit-address-popup.component';
import { UserAddressService } from 'src/app/services/users/user-address.service';
import { ToastrService } from 'ngx-toastr';
import { IClaims } from 'src/app/interfaces/users/i-login-claims';
import { IUserAddress } from 'src/app/interfaces/users/i-user-address';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-address',
  standalone: true,
  imports: [EditAddressPopupComponent, CommonModule],
  templateUrl: './data-address.component.html',
  styleUrls: ['./data-address.component.css'],
})
export class DataAddressComponent {
  constructor(
    private service: UserAddressService,
    private toaster: ToastrService
  ) {}

  @Input() currentUser!: IClaims;

  displayAddModal = 'displayAddAddressModal';
  displayEditModal = 'displayEditAddressModal';

  userAddresses: IUserAddress[] = [];

  selectedUserAddress: IUserAddress = {
    usdrId: 0,
    usdrEntityid: 0,
    usdrAddress1: '',
    usdrAddress2: '',
    usdrModifiedDate: '',
    usdrCityId: 0,
  };

  onPopModalEdit(userAddress: IUserAddress) {
    this.selectedUserAddress = userAddress;
  }

  onConfirmAdd(userAddress: IUserAddress) {
    this.addUserAddress(userAddress);
  }

  onConfirmEdit(userAddress: IUserAddress) {
    if (!this.selectedUserAddress.usdrId) return;
    this.editUserAddress(userAddress, this.selectedUserAddress.usdrId ?? 0);
  }

  onConfirmDelete(usdrId: number | undefined) {
    if (!usdrId) return;

    if (confirm('Are you sure to delete ')) {
      this.deleteAddress(usdrId);
    }
  }

  getUserAddresses(userId: string) {
    this.service
      .getUserAddress(`${environment.baseUrl}/UserAddress/GetAllById/${userId}`)
      .subscribe({
        next: (data) => {
          this.userAddresses = data;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  addUserAddress(userAddress: IUserAddress) {
    this.service
      .addUserAddress(`${environment.baseUrl}/UserAddress`, userAddress)
      .subscribe({
        next: (res) => {
          this.getUserAddresses(this.currentUser.sub);
          this.toaster.success('Address successfully added');
        },
        error: (error) => {
          this.toaster.error(error.error.Message);
          this.getUserAddresses(this.currentUser.sub);
        },
      });
  }

  editUserAddress(userAddress: IUserAddress, usdrId: number) {
    this.service
      .editUserAddress(
        `${environment.baseUrl}/UserAddress/${usdrId}`,
        userAddress
      )
      .subscribe({
        next: (res) => {
          this.getUserAddresses(this.currentUser.sub);
          this.toaster.success('Address updated successfully');
        },
        error: (error) => {
          this.getUserAddresses(this.currentUser.sub);
          this.toaster.error(error.error.Message);
        },
      });
  }

  deleteAddress(usdrId: number) {
    this.service
      .deleteUserAddress(`${environment.baseUrl}/UserAddress/${usdrId}`)
      .subscribe({
        next: (res) => {
          this.getUserAddresses(this.currentUser.sub);
          this.toaster.success('Data deleted successfully');
        },
        error: (error) => {
          this.getUserAddresses(this.currentUser.sub);
          this.toaster.error(error.error.Message);
        },
      });
  }

  ngOnChanges(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.currentUser) {
      this.getUserAddresses(this.currentUser.sub);
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IUserAddress,
  IUserAddressCity,
} from 'src/app/interfaces/users/i-user-address';
import { UserAddressService } from 'src/app/services/users/user-address.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-address-popup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-address-popup.component.html',
  styleUrls: ['./edit-address-popup.component.css'],
})
export class EditAddressPopupComponent {
  constructor(private userAddressService: UserAddressService) {}

  @Output() confirm = new EventEmitter<IUserAddress>();
  @Input() display!: string;

  cities: IUserAddressCity[] = [];

  @Input() userAddress: IUserAddress = {
    usdrEntityid: 0,
    usdrAddress1: '',
    usdrAddress2: '',
    usdrCityId: 0,
  };

  fetchCities() {
    this.userAddressService
      .getCities(`${environment.baseUrl}/master/City`)
      .subscribe({
        next: (data) => {
          this.cities = data;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  onConfirm() {
    this.confirm.emit(this.userAddress);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.fetchCities();
  }
}

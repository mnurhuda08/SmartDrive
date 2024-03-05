import { Component } from '@angular/core';
import { DataProfileComponent } from '../profile/data-profile/data-profile.component';
import { DataAddressComponent } from '../address/data-address/data-address.component';
import { DataAccountNumberComponent } from '../account-number/data-account-number/data-account-number.component';
import { DataPasswordComponent } from '../password/data-password/data-password.component';
import { DataEmailComponent } from '../email/data-email/data-email.component';
import { DataPhoneComponent } from '../phone/data-phone/data-phone.component';
import { UserService } from 'src/app/services/users/user.service';
import { LoginService } from 'src/app/services/users/login.service';
import { environment } from 'src/environments/environment';
import { IClaims } from 'src/app/interfaces/users/i-login-claims';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [
    DataProfileComponent,
    DataPasswordComponent,
    DataEmailComponent,
    DataPhoneComponent,
    DataAddressComponent,
    DataAccountNumberComponent,
  ],
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent {
  constructor(private loginService: LoginService) {}

  currentUser!: IClaims;

  fetchMe() {
    this.loginService.getMe(`${environment.baseUrl}/Auth/Me`).subscribe({
      next: (data) => {
        this.currentUser = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.fetchMe();
  }
}

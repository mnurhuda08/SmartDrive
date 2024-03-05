import { Component, Input } from '@angular/core';
import { EditPasswordPopupComponent } from '../edit-password-popup/edit-password-popup.component';
import { IClaims } from 'src/app/interfaces/users/i-login-claims';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-data-password',
  standalone: true,
  imports: [EditPasswordPopupComponent],
  templateUrl: './data-password.component.html',
  styleUrls: ['./data-password.component.css'],
})
export class DataPasswordComponent {
  constructor(private toaster: ToastrService) {}

  @Input() currentUser!: IClaims;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log('passwordUser: ', this.currentUser);
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // console.log('passwordUser on changes: ', this.currentUser);
  }
}

import { Component } from '@angular/core';
import { EditProfilePopupComponent } from '../edit-profile-popup/edit-profile-popup.component';

@Component({
  selector: 'app-data-profile',
  standalone: true,
  imports: [EditProfilePopupComponent],
  templateUrl: './data-profile.component.html',
  styleUrls: ['./data-profile.component.css'],
})
export class DataProfileComponent {}

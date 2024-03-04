import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUpdateProfile, IUser } from 'src/app/interfaces/users/i-user';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-profile-popup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-profile-popup.component.html',
  styleUrls: ['./edit-profile-popup.component.css'],
})
export class EditProfilePopupComponent {
  baseUrlResources = environment.resources;

  @Input() user!: IUser;

  @Output() confirm = new EventEmitter<IUpdateProfile>();
  @Input() display!: string;

  userProfile: IUpdateProfile = {
    userName: '',
    userFullName: '',
    userBirthPlace: '',
    userBirthDate: '',
    userPhoto: null,
  };

  imgProfile?: string | ArrayBuffer | null;

  fileToUpload?: any;

  changeFile(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      this.fileToUpload = target.files[0];
      this.userProfile.userPhoto = target.files[0];
    }
  }

  readURL(event: Event): void {
    const target = event.target as HTMLInputElement;

    if (target.files && target.files[0]) {
      const file = target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => (this.imgProfile = reader.result);

      reader.readAsDataURL(file);
    }
  }

  convertStampToDate(str: string) {
    const inputDate = new Date(str);

    const year = inputDate.getFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
    const day = inputDate.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }

  onConfirm() {
    const formData: any = new FormData();
    formData.append('userName', this.userProfile.userName);
    formData.append('userFullName', this.userProfile.userFullName);
    formData.append('userBirthPlace', this.userProfile.userBirthPlace);
    formData.append('userBirthDate', this.userProfile.userBirthDate);
    formData.append('userPhoto', this.userProfile.userPhoto);

    this.confirm.emit(formData);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userProfile = {
      userName: this.user.userName,
      userFullName: this.user.userFullName,
      userBirthPlace: this.user.userBirthPlace,
      userBirthDate: this.convertStampToDate(this.user.userBirthDate),
      userPhoto: '',
    };

    this.imgProfile =
      this.baseUrlResources + '/Images/users/' + this.user.userPhoto;
  }
}

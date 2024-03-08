import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IUserAccount,
  IUserAccountBank,
  IUserAccountFintech,
} from 'src/app/interfaces/users/i-user-account';
import { UserAccountService } from 'src/app/services/users/user-account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-account-number-popup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-account-number-popup.component.html',
  styleUrls: ['./edit-account-number-popup.component.css'],
})
export class EditAccountNumberPopupComponent {
  constructor(private userAccountService: UserAccountService) {}

  @Output() confirm = new EventEmitter<IUserAccount>();
  @Input() display!: string;

  accountType: string | null = null;

  banks: IUserAccountBank[] = [];
  fintechs: IUserAccountFintech[] = [];

  onSelectType(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.accountType = target.value as 'BANK' | 'FINTECH';
    this.userAccount.usacType = this.accountType;
  }

  @Input() userAccount: IUserAccount = {
    usacAccountno: '',
    usacType: '',
    usacBankEntityid: null,
    usacFintEntityid: null,
    usacUserEntityid: 0,
  };

  fetchBanks() {
    this.userAccountService.getBanks(`${environment.baseUrl}/Banks`).subscribe({
      next: (data) => {
        this.banks = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  fetchFintechs() {
    this.userAccountService
      .getFintechs(`${environment.baseUrl}/Fintechs`)
      .subscribe({
        next: (data) => {
          this.fintechs = data;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  onConfirm() {
    this.confirm.emit(this.userAccount);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.fetchBanks();
    this.fetchFintechs();
  }
}

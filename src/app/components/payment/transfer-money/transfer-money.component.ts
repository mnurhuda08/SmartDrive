import { Component } from '@angular/core';
import { IClaims } from 'src/app/interfaces/users/i-login-claims';
import { PaymentTransactionCreateDto } from 'src/app/models/payment/PaymentTransactionCreateDto';
import { UserAccount } from 'src/app/models/payment/UserAccount';

import { PaymentTransactionService } from 'src/app/services/payment/payment-transaction.service';
import { UserAccountService } from 'src/app/services/payment/user-account.service';
import { LoginService } from 'src/app/services/users/login.service'; import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent {
  createTrx!: PaymentTransactionCreateDto
  currentUser!: IClaims
  data: any = []

  constructor(private paymentTransactionService: PaymentTransactionService, private userAccountService: UserAccountService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.initCreateTransferMoney()
    this.fetchMe();
  }


  fetchMe() {
    this.loginService.getMe(`${environment.baseUrl}/Auth/Me`).subscribe({
      next: (data) => {
        this.currentUser = data;
        this.getUserAccount(parseInt(data.sub));
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getUserAccount(id: number) {
    this.userAccountService.getUserAccount(id)
      .subscribe((result: { data: UserAccount[] }) => {
        this.data = result;
        console.log(result);
      });
  }

  initCreateTransferMoney() {
    this.createTrx = new PaymentTransactionCreateDto();
  }

  createTransferMoney() {
    console.log(this.createTrx)
    this.createTrx.patrType='TRANSFER'

    this.paymentTransactionService.createPaymentTransaction(this.createTrx)
      .subscribe((result) => console.log(result))
  }

  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
}

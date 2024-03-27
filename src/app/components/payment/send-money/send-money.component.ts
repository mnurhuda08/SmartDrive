import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IClaims } from 'src/app/interfaces/users/i-login-claims';
import { UserAccount } from "src/app/models/payment/UserAccount";
import { PaymentTransactionCreateDto } from "src/app/models/payment/PaymentTransactionCreateDto";
import { PaymentTransactionService } from 'src/app/services/payment/payment-transaction.service';
import { UserAccountService } from 'src/app/services/payment/user-account.service';
import { LoginService } from 'src/app/services/users/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.css']
})
export class SendMoneyComponent implements OnInit, OnChanges {

  currentUser!: IClaims
  data: any = []
  @Input() canSendMoney: boolean = false
  @Input() canSendMoneys: boolean = false
  @Input() selectedSourceAccount!: UserAccount
  @Input() sendAmount!: number
  @Input() targetAccountNumber!: string
  @Input() notes!: string
  constructor(private paymentTransactionService: PaymentTransactionService, private userAccountService: UserAccountService, private loginService: LoginService) {
  }
  ngOnChanges(): void {
    console.log('changes');
  }

  updateCanSendMoney(): void {
    this.canSendMoney = this.sendAmount > 0;
  }


  updateMoneys() {
    this.canSendMoney = !this.canSendMoney
    console.log(this.canSendMoneys)
  }



  ngOnInit(): void {
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


  sendMoney(): void {
    const paytr = new PaymentTransactionCreateDto();
    paytr.patrUsacAccountNoTo = this.targetAccountNumber;
    paytr.patrUsacAccountNoFrom = this.selectedSourceAccount.usacAccountno
    paytr.patrNotes = this.notes
    paytr.sendAmount = this.sendAmount

    this.paymentTransactionService.createPaymentTransaction(paytr)
  }

  // Only Integer Numbers
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

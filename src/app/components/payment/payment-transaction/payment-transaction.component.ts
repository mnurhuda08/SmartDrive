import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { IClaims } from 'src/app/interfaces/users/i-login-claims';
import { PaymentTransaction } from 'src/app/models/payment/PaymentTransaction';
import { PaymentTransactionService } from 'src/app/services/payment/payment-transaction.service';
import { LoginService } from 'src/app/services/users/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-payment-transaction',
  templateUrl: './payment-transaction.component.html',
  styleUrls: ['./payment-transaction.component.css']
})
export class PaymentTransactionComponent implements OnInit {
  data: any
  title = "paging";
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [5, 10, 15, 25]

  currentUser!: IClaims

  constructor(private paymentTrxService: PaymentTransactionService, private loginService: LoginService) {
    this.data = []
  }
  ngOnInit(): void {
    this.fetchMe();
  }

  fetchMe() {
    this.loginService.getMe(`${environment.baseUrl}/Auth/Me`).subscribe({
      next: (data) => {
        this.currentUser = data;
        this.getPaymentPagingCountByUserId(parseInt(data.sub));
        this.getAllPaymentTransactionByPage(parseInt(data.sub))
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getPaymentPagingCountByUserId(userId: number) {
    this.paymentTrxService.getPaymentTransactionsCount(userId).subscribe(count => {
      this.count = count;
    });
  }

  getAllPaymentTransactionByPage(userId: number) {
    this.paymentTrxService.getPaymentTransactionsPaging(userId, this.page, this.tableSize)
      .subscribe((result: { data: PaymentTransaction[], count: number }) => {
        this.data = result;
      });
  }

  onTableDataChange(event: any) {
    this.page = event
    this.getAllPaymentTransactionByPage(parseInt(this.currentUser.sub)) 
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllPaymentTransactionByPage(parseInt(this.currentUser.sub))

  }

}

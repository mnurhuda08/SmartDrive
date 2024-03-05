import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { PaymentTransaction } from 'src/app/models/payment/PaymentTransaction';
import { PaymentTransactionService } from 'src/app/services/payment/payment-transaction.service';

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
  tableSize: number =3;
  tableSizes: any = [5, 10, 15, 25]
  userId: number = 2
  @ViewChild(MatSort) sort!: MatSort
  constructor(private paymentTrxService: PaymentTransactionService) {
    this.data = []
 
  }
  ngOnInit(): void {
    // this.getAllPaymentTransaction();
    this.paymentTrxService.getPaymentTransactionsCount(this.userId).subscribe(count => {
      console.log("Received count from API:", count);
      this.count = count;
      console.log("Updated count:", this.count);
    });
    this.getAllPaymentTransactionByPage()
  }

  // getAllPaymentTransactionByPage() {
  //   this.paymentService.getPaymentTransactionsPaging(2, this.page, this.tableSize)
  //     .subscribe((result: PaymentTransaction[]) => (this.data = result))
  // }
 
  getAllPaymentTransactionByPage() {
    this.paymentTrxService.getPaymentTransactionsPaging(this.userId, this.page, this.tableSize)
      .subscribe((result: { data: PaymentTransaction[], count: number }) => {
        this.data = result; 
      });
  }

  onTableDataChange(event: any) {
    this.page = event
    this.getAllPaymentTransactionByPage()
    // this.getAllPaymentTransaction();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllPaymentTransactionByPage()

  }

}

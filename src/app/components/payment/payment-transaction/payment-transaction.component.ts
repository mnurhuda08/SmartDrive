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
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 25]

  @ViewChild(MatSort) sort!: MatSort
  constructor(private paymentService: PaymentTransactionService) {
    this.data = []

  }
  ngOnInit(): void {
    this.getAllPaymentTransaction();
  }

  getAllPaymentTransaction() {
    this.paymentService
      .getPaymentTransactionsByUserId(2)
      .subscribe((result: PaymentTransaction[]) => (this.data = result))
  }

  onTableDataChange(event: any) {
    this.page = event
    this.getAllPaymentTransaction();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllPaymentTransaction();
  }

}

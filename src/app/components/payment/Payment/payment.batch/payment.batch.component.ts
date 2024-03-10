import { Component, OnInit } from '@angular/core';
import { PartnerBatchInvoiceResponse } from 'src/app/models/payment/bank';
import { PaymentBatchService } from 'src/app/services/payment/payment-batch.service';

@Component({
  selector: 'app-payment.batch',
  templateUrl: './payment.batch.component.html',
  styleUrls: ['./payment.batch.component.css']
})
export class PaymentBatchComponent implements OnInit {

  partnerBatchInvoices !: PartnerBatchInvoiceResponse[];

  constructor(private paymentBatchService: PaymentBatchService) {

  }
  ngOnInit(): void {
  }

  generateBatchPartner() {
    this.paymentBatchService.getPartnerBatchInvoice()
      .subscribe((result: PartnerBatchInvoiceResponse[]) => this.partnerBatchInvoices = result)

  }

  generateTransferPartner() {
    this.paymentBatchService.generatePartnerBatchInvoice()
    .subscribe({
      next:(result)=>{
        console.log(result)

      }
    })
  }




}

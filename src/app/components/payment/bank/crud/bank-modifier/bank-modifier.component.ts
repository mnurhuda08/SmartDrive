import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Bank } from 'src/app/models/payment/bank';
import { PaymentPageComponentComponent } from '../../../PaymentPage/payment.page.component/payment.page.component.component';

@Component({
  selector: 'app-bank-modifier',
  templateUrl: './bank-modifier.component.html',
  styleUrls: ['./bank-modifier.component.css']
})
export class BankModifierComponent implements OnInit, OnChanges {
  @Input() paymentPageComponent!: PaymentPageComponentComponent;
  @Input() isModalOpen!: boolean;
  @Output() updatedBank = new EventEmitter<Bank[]>();
  @Input() bank!: Bank;
  @Input() isCreate!: boolean

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void { }


  closeModal(): void {
    this.paymentPageComponent.closeModal();
  }
}

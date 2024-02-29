import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fintech } from 'src/app/models/payment/Fintech';
import { PaymentPageComponentComponent } from '../../../PaymentPage/payment.page.component/payment.page.component.component';

@Component({
  selector: 'app-fintech-modifier',
  templateUrl: './fintech-modifier.component.html',
  styleUrls: ['./fintech-modifier.component.css']
})
export class FintechModifierComponent implements OnInit {

  @Input() paymentPageComponent!: PaymentPageComponentComponent;
  @Input() isModalOpen!: boolean;
  @Output() updatedFintech = new EventEmitter<Fintech[]>();
  @Input() fintech!: Fintech;
  @Input() isCreate!: boolean

  constructor() { }

  ngOnInit(): void { }
  closeModal(): void {
    this.paymentPageComponent.closeModal();
  }

  logFintech() {
    console.log(this.fintech);
  }


}


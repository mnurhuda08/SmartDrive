import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BankComponent } from '../../bank.component';
import { ImplicitReceiver } from '@angular/compiler';
import { Bank } from 'src/app/models/payment/bank';

@Component({
  selector: 'app-bank-modifier',
  templateUrl: './bank-modifier.component.html',
  styleUrls: ['./bank-modifier.component.css']
})
export class BankModifierComponent implements OnInit {
  @Input() bankComponent!: BankComponent;
  @Input() isModalOpen!: boolean;
  @Output() addBank: EventEmitter<any> = new EventEmitter();
  @Input() bank!: Bank;
  bankName: string = '';
  bankDesc: string = '';
  @Input() isCreate!: boolean

  constructor() { }
  ngOnInit(): void { }

  onCancelClick(): void {
    // Emit an event to inform the parent component to close the modal
    this.addBank.emit(null);
  }

  onAddBankClick(): void {
    // Emit an event to inform the parent component to add the bank
    this.addBank.emit({ name: this.bankName, description: this.bankDesc });
  }

  closeModal(): void {
    this.bankComponent.closeModal();
  }

  updateBank(bank: Bank) {
    this.bankComponent.editBank(bank);
  }
}

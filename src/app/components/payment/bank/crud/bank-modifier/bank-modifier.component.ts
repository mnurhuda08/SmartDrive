import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BankComponent } from '../../bank.component';
import { ImplicitReceiver } from '@angular/compiler';
import { Bank } from 'src/app/models/payment/bank';
import { BankService } from 'src/app/services/payment/bank.service';

@Component({
  selector: 'app-bank-modifier',
  templateUrl: './bank-modifier.component.html',
  styleUrls: ['./bank-modifier.component.css']
})
export class BankModifierComponent implements OnInit {
  @Input() bankComponent!: BankComponent;
  @Input() isModalOpen!: boolean;
  @Output() updatedBank = new EventEmitter<Bank[]>();
  @Input() bank!: Bank;
  @Input() isCreate!: boolean

  constructor(private bankService: BankService) { }
  ngOnInit(): void { }


  closeModal(): void {
    this.bankComponent.closeModal();
  }  
}

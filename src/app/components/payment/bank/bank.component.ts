import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Bank } from 'src/app/models/payment/bank';
import { BankService } from 'src/app/services/payment/bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css'],
})
export class BankComponent implements OnInit {
  title = 'Bank.UI';
  banks: Bank[] = [];
  bankToEdit!: Bank;
  isModalOpen: boolean = false;
  isCreate!: boolean
  constructor(private bankService: BankService) { }

  @Output() updatedBank = new EventEmitter<Bank[]>();

  ngOnInit(): void {
    this.bankService
      .getBanks()
      .subscribe((result: Bank[]) => (this.banks = result))

  }
  initNewBank() {
    this.bankToEdit = new Bank();
  }

  editInit(bank: Bank) {
    this.bankToEdit = bank;
  }

  createNewBank(bank: Bank) {
    this.bankService.createBank(this.bankToEdit)
      .subscribe((banks: Bank[]) => this.updatedBank.emit(banks))
      this.updateBankList(this.banks);

  }

  editBank(bank: Bank) {
    this.bankService.updateBank(bank)
      .subscribe((banks: Bank[]) => this.updatedBank.emit(banks))
      this.updateBankList(this.banks);

  }

  deleteBank(bank: Bank) {
    this.bankToEdit = bank;
    this.bankService.deleteBank(bank)
      .subscribe((banks: Bank[]) => this.updatedBank.emit(banks));
      this.updateBankList(this.banks);

  }

  openModal(newIsCreateValue: boolean): void {
    this.isModalOpen = true;
    this.isCreate = newIsCreateValue;

  }

  closeModal(): void { this.isModalOpen = false; }

  updateBankList(banks: Bank[]) {
    this.banks = banks
  }

}

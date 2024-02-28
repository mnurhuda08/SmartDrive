import { Component, OnInit } from '@angular/core';
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
  // isAddModalOpen: boolean = false;
  // isEditModalOpen: boolean = false;
  isModalOpen: boolean = false;
  isCreate!: boolean
  constructor(private bankService: BankService) { }

  ngOnInit(): void {
    this.bankService
      .getBanks()
      .subscribe((result: Bank[]) => (this.banks = result))

    // this.bankService.createBank(this.bank).subscribe(this.bank= );
  }

  createNewBank() {
    this.bankToEdit = new Bank()
  }

  editBank(bank: Bank) {
    this.bankToEdit = bank;
  }

  openModal(newIsCreateValue: boolean): void {
    this.isModalOpen = true;
    this.isCreate = newIsCreateValue;
  }
  closeModal(): void { this.isModalOpen = false; }
  // openAddModal(): void { this.isAddModalOpen = true; }
  // closeAddModal(): void { this.isAddModalOpen = false; }
  // openEditModal(): void { this.isEditModalOpen = true; }
  // closeEditModal(): void { this.isEditModalOpen = false; }

  onAddBank(bankData: any): void {
    // Implement logic to add bank
    console.log('Adding bank:', bankData);
    this.closeModal();
  }
}

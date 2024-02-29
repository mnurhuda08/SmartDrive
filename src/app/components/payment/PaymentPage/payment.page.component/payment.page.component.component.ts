import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Fintech } from 'src/app/models/payment/Fintech';
import { Bank } from 'src/app/models/payment/bank';
import { BankService } from 'src/app/services/payment/bank.service';
import { FintechService } from 'src/app/services/payment/fintech.service';

@Component({
  selector: 'app-payment.page.component',
  templateUrl: './payment.page.component.component.html',
  styleUrls: ['./payment.page.component.component.css']
})
export class PaymentPageComponentComponent implements OnInit {
  title = 'Bank.UI';
  bankList: Bank[] = [];
  bankToEdit!: Bank;

  fintechList: Fintech[] = [];
  fintechToEdit!: Fintech;

  pageEnum!: paymentenum
  public pageEnumSelect = paymentenum
  isModalOpen: boolean = false;
  isCreate!: boolean
  constructor(private bankService: BankService, private fintechService: FintechService) { }

  @Output() updatedBank = new EventEmitter<Bank[]>();
  @Output() updatedFintech = new EventEmitter<Fintech[]>();

  ngOnInit(): void {
    this.getAllBanks();

    this.getAllFintechs();
  }
  //#region Bank Region
  initNewBank() {
    this.bankToEdit = new Bank();
  }

  editInit(bank: Bank) {
    this.bankToEdit = bank;
  }

  getAllFintechs() {
    this.fintechService
      .getFintechs()
      .subscribe((result: Fintech[]) => (this.fintechList =  result))
  }

  getAllBanks() {
    this.bankService
      .getBanks()
      .subscribe((result: Bank[]) => (this.bankList = result))

  }

  createNewBank(bank: Bank) {
    this.bankService.createBank(this.bankToEdit)
      .subscribe((banks: Bank[]) => {
        this.updatedBank.emit(banks);
        this.getAllBanks();
        this.closeModal();
      });
  }

  editBank(bank: Bank) {
    this.bankService.updateBank(bank)
      .subscribe((banks: Bank[]) => this.updatedBank.emit(banks))
    this.closeModal();
  }

  deleteBank(bank: Bank) {
    this.bankService.deleteBank(bank)
      .subscribe((banks: Bank[]) => {
        this.updatedBank.emit(banks);
        this.getAllBanks()
      });

  }
  //#endregion




  //#region Fintech Region
  initNewFintech() {
    this.fintechToEdit = new Fintech();
  }

  editInitFintech(fintech: Fintech) {
    this.fintechToEdit = fintech;
  }

  createNewFintech(fintech: Fintech) {
    this.fintechService.createFintech(this.fintechToEdit)
      .subscribe((fintechs: Fintech[]) => {
        this.updatedFintech.emit(fintechs);
        this.getAllFintechs()
        this.closeModal();
      });
  }

  editFintech(fintech: Fintech) {
    this.fintechService.updateFintech(fintech)
      .subscribe((fintechs: Fintech[]) => this.updatedFintech.emit(fintechs))

    this.closeModal();
  }

  deleteFintech(fintech: Fintech) {
    this.fintechService.deleteFintech(fintech)
      .subscribe((fintechs: Fintech[]) => {
        this.updatedFintech.emit(fintechs);
        this.getAllFintechs();
      });
  }

  //#endregion

  closeModal(): void {
    this.isModalOpen = false;
  }

  openModal(newIsCreateValue: boolean, newPageEnum: paymentenum): void {
    this.pageEnum = newPageEnum;
    this.isModalOpen = true;
    this.isCreate = newIsCreateValue;
  }

  updateBankList(banks: Bank[]) {
    this.bankList = banks
  }

  updateFintechList(fintechs: Fintech[]) {
    this.fintechList = fintechs
  }
}


enum paymentenum {
  BANK = 'Bank',
  FINTECH = 'Fintech'
}
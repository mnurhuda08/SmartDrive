import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PartnerFormsComponent } from '../partner-forms/partner-forms.component';
import { ActionStatus } from 'src/app/interfaces/common/actionStatus';
import { Action } from 'src/app/constants/action';
import { Partner } from 'src/app/interfaces/partners/partner';
import { PartnerUnion } from 'src/app/interfaces/partners/partner-page-union';
import { PartnerEntity } from 'src/app/constants/partner-entity';
import { PartnerContact } from 'src/app/interfaces/partners/partner-contact';
import { PartnerAreaWorkgroupForm } from 'src/app/interfaces/partners/partner-area-workgroup';

@Component({
  selector: 'partner-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() partner ?: Partner | null
  @Input() partnerContact ?: PartnerContact| null
  @Input() partnerAreaWorkgroup ?: PartnerAreaWorkgroupForm | null
  @Input() actionStatus !: ActionStatus
  @Input() isModalOpen !: boolean

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() submitData : EventEmitter<PartnerUnion> = new EventEmitter<PartnerUnion>

  public enumPartnerEntity = PartnerEntity

  isFormValid: boolean = false
  data !: PartnerUnion

  constructor(){}
  
  onCloseModal(){
    this.closeModal.emit(false)
  }

  onBackdropClick(event: MouseEvent) {
    // Check if the click target is the modal backdrop
    if ((event.target as HTMLElement).classList.contains('modal')) {
      // Prevent the click event from propagating to the modal
      event.stopPropagation();      
    }
  }

  onSubmit(){
      this.submitData.emit(this.data)
  }

  handleFormValueChanged(data: PartnerUnion) {
    this.data = data
  }
  
  handleFormValidityChanged(isValid: boolean) {
    this.isFormValid = isValid;
  }

  ngOnInit(): void {
  }
}

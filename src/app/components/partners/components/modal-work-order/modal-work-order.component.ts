import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Action } from 'src/app/constants/action';
import { PartnerEntity } from 'src/app/constants/partner-entity';
import { ActionStatus } from 'src/app/interfaces/common/actionStatus';
import { ClaimAssetsSparepart } from 'src/app/interfaces/partners/claim-assets-sparepart';
import { PartnerUnion } from 'src/app/interfaces/partners/partner-page-union';

@Component({
  selector: 'app-modal-work-order',
  templateUrl: './modal-work-order.component.html',
  styleUrls: ['./modal-work-order.component.css']
})
export class ModalWorkOrderComponent implements OnInit {
  @Input() isLoading !: boolean
  @Input() actionStatus !: ActionStatus
  @Input() claimAssetSpareparts !: ClaimAssetsSparepart[] | null
  @Input() workOrderId?: {
    seroId: string,
    seroPartId: number,
    workOrder: string
  }
  @Output() submit: EventEmitter<PartnerUnion[] | FormData> =  new EventEmitter<PartnerUnion[] | FormData>()

  public enumEntity = PartnerEntity
  public enumAction = Action

  data ?: PartnerUnion[] | FormData

  isFormValid: boolean = false

  handleFormValidityChange(isValid: boolean){    
    this.isFormValid = isValid
  }

  handleFormSparepartValueChange(data: ClaimAssetsSparepart[]){
    this.data = data as ClaimAssetsSparepart[]
  }

  handleFormEvidenceValueChange(data: FormData){
    this.data = data as FormData
    
  }

  onSubmit(): void{
    if(this.actionStatus.entity === this.enumEntity.CLAIM_ASSET_SPAREPARTS){
      this.submit.emit(this.data as PartnerUnion[])
    }
    if(this.actionStatus.entity === this.enumEntity.CLAIM_ASSET_EVIDENCE) {      
      this.submit.emit(this.data as FormData)
    }
  }

  ngOnInit(): void {
  }
}

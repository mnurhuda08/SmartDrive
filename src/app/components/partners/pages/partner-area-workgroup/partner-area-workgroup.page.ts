import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagingParameter } from 'src/app/constants/PagingParameter';
import { Action } from 'src/app/constants/action';
import { PartnerEntity } from 'src/app/constants/partner-entity';
import { ActionStatus } from 'src/app/interfaces/common/actionStatus';
import { ClaimAssetsSparepart } from 'src/app/interfaces/partners/claim-assets-sparepart';
import { PaginationList } from 'src/app/interfaces/partners/pagination-list';
import { PartnerUnion } from 'src/app/interfaces/partners/partner-page-union';
import { PartnerWorkOrder } from 'src/app/interfaces/partners/partner-work-order';
import { IClaims } from 'src/app/interfaces/users/i-login-claims';
import { ClaimAssetEvidenceService } from 'src/app/services/partners/claim-asset-evidence.service';
import { ClaimAssetSparepartService } from 'src/app/services/partners/claim-asset-sparepart.service';
import { PartnerAreaWorkgroupService } from 'src/app/services/partners/partner-area-workgroup.service';
import { PartnerContactService } from 'src/app/services/partners/partner-contact.service';
import { PartnerWorkOrderService } from 'src/app/services/partners/partner-work-order.service';
import { LoginService } from 'src/app/services/users/login.service';
import { environment } from 'src/environments/environment.development';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-partner-area-workgroup',
  templateUrl: './partner-area-workgroup.page.html',
  styleUrls: ['./partner-area-workgroup.page.scss']
})
export class PartnerAreaWorkgroupPage implements OnInit {
  seotArwgCode: string = ''
  seroPartId: number = 0
  workOrdersPagination ?: PaginationList<PartnerWorkOrder> = { currentPages: 1, data: [], totalPages: 5 }
  workOrdersPagingParameter !: PagingParameter 
  claimAssetSpareparts : ClaimAssetsSparepart[] | null = null

  workOrderId?: {
    seroId: string,
    seroPartId: number,
    workOrder: string
  }

  actionStatus!: ActionStatus
  currentUser!: IClaims;

  public enumAction = Action
  public enumEntity = PartnerEntity

  constructor(
    private _partnerWorkOrderService: PartnerWorkOrderService,
    private route: ActivatedRoute,
    private _partnerContactService: PartnerContactService,
    private _partnerAreaWorkgroupService: PartnerAreaWorkgroupService, 
    private _claimAssetSparepart: ClaimAssetSparepartService,
    private _claimAssetEvidence: ClaimAssetEvidenceService,
    private _loginService: LoginService
  ) {
    this.workOrdersPagingParameter = new PagingParameter('', 1, 1)
  }

  getWorkOrder() {    
    this._partnerWorkOrderService.getWorkOrderPaging(this.seroPartId, this.seotArwgCode, this.workOrdersPagingParameter).subscribe({
      next: (v) => this.workOrdersPagination = v,
      error: (e) => Swal.fire('Error', 'Cannot Fetch Data', 'error')
    })
  }
  
  openModal(
    action: Action,
    workOrderId?: {
      seroId: string,
      seroPartId: number,
      workOrder: string
    }
  ) {
    this.workOrderId = workOrderId
    const workOrder = this.workOrdersPagination!.data.find(x =>
      x.seroId === workOrderId?.seroId &&
      x.seroPartId === workOrderId.seroPartId &&
      x.workOrder === workOrderId.workOrder
    )
    this.actionStatus = {
      action,
      entity: workOrder?.workOrder.toLowerCase().includes('repair') ? PartnerEntity.CLAIM_ASSET_EVIDENCE : PartnerEntity.CLAIM_ASSET_SPAREPARTS
    }
  }

  submit(data: PartnerUnion[] | FormData){    
    switch (this.actionStatus.entity) {
      case PartnerEntity.CLAIM_ASSET_SPAREPARTS:
        Swal.fire({
          title: 'Are you sure want to submit?',
          text: "You won't be able to revert this!",
          showCancelButton: true,
          confirmButtonText: `Yes`,
          denyButtonText: `No`,
        }).then((result) => {
          if (result.isConfirmed) {
            this._claimAssetSparepart.createSparePart(data as ClaimAssetsSparepart[]).subscribe({
              next: () => this.getWorkOrder(),
              error: (e) => Swal.fire('Error', e.error.message, 'error'),
              complete: () => Swal.fire('Success', 'Claim Asset Sparepart has been submitted', 'success') 
            }) 
          }
        })
   
        break;
      case PartnerEntity.CLAIM_ASSET_EVIDENCE:
        Swal.fire({
          title: 'Are you sure want to claim evidence?',
          text: "You won't be able to revert this!",
          showCancelButton: true,
          confirmButtonText: `Yes`,
          denyButtonText: `No`,
        }).then((result) => {
          if (result.isConfirmed) {
            let isValid: boolean = true
            data.forEach((value, key) => {
              if (key === 'photo' && typeof value === 'string') {
                Swal.fire('Error', 'Please upload photo evidence', 'error')    
                isValid = false         
                return
              }
            })
            if(isValid){
              this._claimAssetEvidence.create(data as FormData).subscribe({
                next: () => this.getWorkOrder(),
                error: (e) => Swal.fire('Error', e.error.message, 'error'),
                complete: () => Swal.fire('Success', 'Claim Asset Evidence has been submitted', 'success') 
              }) 
            }
          }
        })
        break;
      default:
        break;
    }
  }

  getMe() {
    this._loginService.getMe(`${environment.baseUrl}/Auth/Me`).subscribe({
      next: (data: IClaims) => {
        this.currentUser = data;
        this.getPartnerByUserId()
      },
    });
  }

  getPartnerByUserId(){
    this._partnerContactService.getByPartnerId(Number(this.currentUser.sub)).subscribe({
      next: (data) => {
        console.log(data);
        if (data.length > 0) {
          this.seroPartId = data[0].pacoPatrnEntityid
          this.getAreaWorkgroupByUserAndPartner()
        }
      }
    })
  }

  getAreaWorkgroupByUserAndPartner() {
    this._partnerAreaWorkgroupService.getByPartnerAndUserEntityId(this.seroPartId, Number(this.currentUser.sub)).subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.seotArwgCode = data[0].pawoArwgCode
          this.getWorkOrder()
        }
      }
    })
  }

  ngOnInit(): void {
    this.getMe()
    this.actionStatus = {
      action: Action.CREATE,
      entity: PartnerEntity.CLAIM_ASSET_SPAREPARTS
    }
  }

  onWorkOrderPaging(parameter: PagingParameter) {
    this.workOrdersPagingParameter = parameter
    this.getWorkOrder()
  }

}

import { Component, OnInit } from '@angular/core';
import { PagingParameter } from 'src/app/constants/PagingParameter';
import { Action } from 'src/app/constants/action';
import { PartnerEntity } from 'src/app/constants/partner-entity';
import { PartnerStatus } from 'src/app/constants/partnerStatus';
import { ActionStatus } from 'src/app/interfaces/common/actionStatus';
import { PaginationList } from 'src/app/interfaces/partners/pagination-list';
import { Partner } from 'src/app/interfaces/partners/partner';
import { PartnerAreaWorkgroup, PartnerAreaWorkgroupForm, PartnerAreaWorkgroupResponse } from 'src/app/interfaces/partners/partner-area-workgroup';
import { PartnerContact } from 'src/app/interfaces/partners/partner-contact';
import { PartnerUnion } from 'src/app/interfaces/partners/partner-page-union';
import { PartnerAreaWorkgroupService } from 'src/app/services/partners/partner-area-workgroup.service';
import { PartnerContactService } from 'src/app/services/partners/partner-contact.service';
import { PartnerService } from 'src/app/services/partners/partner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-partner-page',
  templateUrl: './partner.page.html',
  styleUrls: ['./partner.page.scss']
})

export class PartnerPage implements OnInit {
  partnerContact ?: PartnerContact | null
  paginationPartner: PaginationList<Partner> = { currentPages: 1, data: [], totalPages: 1 }
  partnerPagingParameter !: PagingParameter
  
  partner?: Partner | null
  partnerContactPagination: PaginationList<PartnerContact> = { currentPages: 1, data: [], totalPages: 5 }
  partnerContactPagingParameter !: PagingParameter
  partnerContactId ?: { 
    pacoPatrnEntityid: number,
    pacoUserEntityid: number 
  }

  partnerAreaWorkgroup?: PartnerAreaWorkgroupForm | null
  partnerAreaWorkgroupPagingParameter !: PagingParameter
  partnerAreaWorkgroupPagination: PaginationList<PartnerAreaWorkgroupResponse> = { currentPages: 1, data: [], totalPages: 5 }
  partnerAreaWorkgroupId ?: { 
    pawoPatrEntityid: number;
    pawoArwgCode: string;
    pawoUserEntityid: number;
  }

  isModalOpen: boolean = false

  actionStatus: ActionStatus = {
    action: Action.CREATE,
    entity: "PARTNER"
  }
  public enumAction = Action
  public enumPartnerEntity = PartnerEntity

  constructor(
    private _partnerService: PartnerService, 
    private _partnerContactService: PartnerContactService,
    private _partnerAreaWorkgroup: PartnerAreaWorkgroupService
    ) {
    this.partnerPagingParameter = new PagingParameter('', 1, 1)
    this.partnerContactPagingParameter = new PagingParameter('', 5, 1)
    this.partnerAreaWorkgroupPagingParameter = new PagingParameter('', 5, 1)
  }

  openModal(
    entity: string, 
    action: Action, 
    partnerContactId ?: { 
      pacoPatrnEntityid: number,
      pacoUserEntityid: number 
    },  
    partnerAreaWorkgroupId ?: { 
      pawoPatrEntityid: number;
      pawoArwgCode: string;
      pawoUserEntityid: number;
    }
  )  
    {
    this.actionStatus = { action: action, entity: entity }
    this.isModalOpen = true
    if(entity === this.enumPartnerEntity.PARTNER_CONTACT) {
      this.partnerContact = this.partnerContactPagination.data.find(x => x.pacoPatrnEntityid === partnerContactId?.pacoPatrnEntityid && x.pacoUserEntityid === partnerContactId?.pacoUserEntityid )
    }
    if(entity === this.enumPartnerEntity.PARTNER_CONTACT && action === this.enumAction.UPDATE) {
      this.partnerContactId = partnerContactId
    }
    if(entity === this.enumPartnerEntity.PARTNER_AREA_WORKGROUP){
      const temp: PartnerAreaWorkgroupResponse| undefined = this.partnerAreaWorkgroupPagination.data.find(x => 
        x.pawoArwgCode === partnerAreaWorkgroupId?.pawoArwgCode &&
        x.pawoPatrEntityid === partnerAreaWorkgroupId.pawoPatrEntityid && 
        x.pawoUserEntityid === partnerAreaWorkgroupId.pawoUserEntityid
      )
      this.partnerAreaWorkgroup = { 
        type: this.enumPartnerEntity.PARTNER_AREA_WORKGROUP,
        pawoArwgCode: temp?.pawoArwgCode as string,
        pawoId: `${temp?.pawoPatrEntityid}-${temp?.pawoUserEntityid}`,
        pawoStatus: temp?.pawoStatus as PartnerStatus  
      }
    }
    if(entity === this.enumPartnerEntity.PARTNER_AREA_WORKGROUP && action === this.enumAction.UPDATE) {
      this.partnerAreaWorkgroupId = partnerAreaWorkgroupId
    }
  }

  closeModal(status: boolean) {
    this.isModalOpen = status
  }

  submit(data: PartnerUnion): void {
    switch (data.type) {
      case this.enumPartnerEntity.PARTNER:
        this.handlePartner(this.actionStatus.action, data)
        break
      case this.enumPartnerEntity.PARTNER_CONTACT:
        this.handlePartnerContact(this.actionStatus.action, data)
        break
      case this.enumPartnerEntity.PARTNER_AREA_WORKGROUP:
        this.handlePartnerAreaWorkgroup(this.actionStatus.action, data)
        break
    }
  }

  onDeletePartner(partEntityid: number) {
    this._partnerService.deletPartner(partEntityid).subscribe({
      next: (v) => {
        if (this.partnerPagingParameter.pageNumber === this.paginationPartner.totalPages) {
          this.partnerPagingParameter.pageNumber--
        }
        this.getPartner()
      },
      error: (e) => console.log(e),
      complete: () => console.log("complete")
    })
  }

  onDeletePartnerContact(pacoPatrnEntityid: number, pacoUserEntityid: number){
    this._partnerContactService.delete(pacoPatrnEntityid, pacoUserEntityid).subscribe({
      next: (v) => {
        if (this.partnerContactPagination.data.length === 1) {          
          this.partnerContactPagingParameter.pageNumber--
        }

        this.getPartnerContact()
      },
      error: (e) => console.log(e),
      complete: () => console.log("complete")
    })
  }

  onDeletePartnerAreaWorkgroup(      
    pawoPatrEntityid: number,
    pawoUserEntityid: number,
    pawoArwgCode: string
  ){
    this._partnerAreaWorkgroup.delete(pawoPatrEntityid, pawoUserEntityid, pawoArwgCode).subscribe({
      next: (v) => {
        if (this.partnerAreaWorkgroupPagination.data.length === 1) {          
          this.partnerAreaWorkgroupPagingParameter.pageNumber--
        }
        this.getPartnerAreaWorkgroup()
      },
      error: (e) => console.log(e),
      complete: () => console.log("complete")
    })
  }

  handlePartner(action: Action, data: Partner) {
    switch (action) {
      case this.enumAction.CREATE:
        this._partnerService.createPartner(data).subscribe({
          next: (v) => this.partner = v,
          error: (e) => console.log(e),
          complete: () => console.log("complete")
        })
        break;
      case this.enumAction.UPDATE:
        this._partnerService.updatePartner(data).subscribe({
          next: (v) => this.partner = v,
          error: (e) => console.log(e),
          complete: () => console.log("complete")
        })
        break;
      default:
        break;
    }
  }

  handlePartnerContact(action: Action, data: PartnerContact) {
    switch (action) {
      case this.enumAction.CREATE:        
        this._partnerContactService.create(data).subscribe({
          next: (v) => this.getPartnerContact(),
          error: (e) => console.log(e),
          complete: () => console.log("complete")          
        })
        break;
      case this.enumAction.UPDATE:
        this._partnerContactService.update(data, this.partnerContactId).subscribe({
          next: (v) => this.getPartnerContact(),
          error: (e) => console.log(e),
          complete: () => console.log("complete")
        })
        break;
      default:
        break;
    }
  }

  handlePartnerAreaWorkgroup(action: Action, form: PartnerAreaWorkgroupForm){
    let split = form.pawoId.split('-')
    const pawoPatrEntityid : number =  Number(split[0])
    const pawoUserEntityid : number =  Number(split[1])
    const data: PartnerAreaWorkgroup = {
      type: this.enumPartnerEntity.PARTNER_AREA_WORKGROUP,
      pawoArwgCode: form.pawoArwgCode,
      pawoStatus: form.pawoStatus,
      pawoPatrEntityid,
      pawoUserEntityid
    } 

    switch (action) {
      case this.enumAction.CREATE:        
        this._partnerAreaWorkgroup.create(data).subscribe({
          next: (v) => this.getPartnerAreaWorkgroup(),
          error: (e) => console.log(e),
          complete: () => console.log("complete")          
        })
        break;
      case this.enumAction.UPDATE:
        this._partnerAreaWorkgroup.update(data, this.partnerAreaWorkgroupId).subscribe({
          next: (v) => this.getPartnerAreaWorkgroup(),
          error: (e) => console.log(e),
          complete: () => console.log("complete")
        })
        break;
      default:
        break;
    }
  }

  getPartner(): void {
    this._partnerService.getPartnersPaging(this.partnerPagingParameter).subscribe({
      next: (v) => {
        this.paginationPartner = v;
        this.partner = this.paginationPartner.data[0] ?? null;
      },
      error: (e) => console.log(e),
      complete: () => console.log("completed"),
    })
  }

  getPartnerContact(): void{
    this._partnerContactService.getPartnerContactPaging(this.partnerContactPagingParameter).subscribe({
      next: (v) => {
        this.partnerContactPagination = v;
      },
      error: (e) => console.log(e),
      complete: () => console.log("completed"),
    })
  }

  getPartnerAreaWorkgroup(): void{
    this._partnerAreaWorkgroup.getPartnerAreaWorkgroupPaging(this.partnerAreaWorkgroupPagingParameter).subscribe({
      next: (v) => {
        this.partnerAreaWorkgroupPagination = v;
      },
      error: (e) => console.log(e),
      complete: () => console.log("completed"),
    })
  }

  onSearchPartner() {
    this.getPartner()
  }

  onPartnerPaging(pagingParameter: PagingParameter) {
    this.partnerPagingParameter = pagingParameter
    this.getPartner()
  }

  onPartnerContactPaging(pagingParameter: PagingParameter){
    this.partnerContactPagingParameter = pagingParameter
    this.getPartnerContact()
  }

  onPartnerAreaWorkgroupPaging(pagingParameter: PagingParameter){
    this.partnerAreaWorkgroupPagingParameter = pagingParameter
    this.getPartnerAreaWorkgroup()
  }

  ngOnInit(): void {
    this.getPartner()
    this.getPartnerContact()
    this.getPartnerAreaWorkgroup()
  }

  // confirmBox(){
  //   Swal.fire({
  //     title: 'Are you sure want to remove?',
  //     text: 'You will not be able to recover this file!',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, delete it!',
  //     cancelButtonText: 'No, keep it'
  //   }).then((result) => {
  //     if (result.value) {
  //       Swal.fire(
  //         'Deleted!',
  //         'Your imaginary file has been deleted.',
  //         'success'
  //       )
  //     } else if (result.dismiss === Swal.DismissReason.cancel) {
  //       Swal.fire(
  //         'Cancelled',
  //         'Your imaginary file is safe :)',
  //         'error'
  //       )
  //     }
  //   })
  // }

}

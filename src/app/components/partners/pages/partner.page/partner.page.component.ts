import { Component, OnInit } from '@angular/core';
import { PagingParameter } from 'src/app/constants/PagingParameter';
import { Action } from 'src/app/constants/action';
import { ActionStatus } from 'src/app/interfaces/common/actionStatus';
import { PaginationList } from 'src/app/interfaces/partners/pagination-list';
import { Partner } from 'src/app/interfaces/partners/partner';
import { PartnerUnion } from 'src/app/interfaces/partners/partner-page-union';
import { PartnerService } from 'src/app/services/partners/partner.service';

@Component({
  selector: 'app-partner-page',
  templateUrl: './partner.page.component.html',
  styleUrls: ['./partner.page.component.scss']
})

export class PartnerPage implements OnInit {
  partner?: Partner | null
  paginationPartner : PaginationList<Partner> = { currentPages: 1, data:[], totalPages: 1 }
  pagingPartnerParameter !: PagingParameter
  isModalOpen: boolean = false
  actionStatus: ActionStatus = {
    action: Action.CREATE,
    entity: "PARTNER"
  }
  public enumAction = Action

  constructor(private partnerService: PartnerService) {
    this.pagingPartnerParameter = new PagingParameter('', 1, 1)
  }

  openModal(entity: string, action: Action) {
    this.actionStatus = { action: action, entity: entity }
    this.isModalOpen = true
  }

  closeModal(status: boolean) {
    this.isModalOpen = status
  }

  create(data: PartnerUnion): void {
    switch(data.type){
      case 'partner':
        this.handlePartner(this.actionStatus.action, data)
        break;
    }
  }

  onDeletePartner(partEntityid: number){
    this.partnerService.deletPartner(partEntityid).subscribe({
      next: (v) => {
        if(this.pagingPartnerParameter.pageNumber === this.paginationPartner.totalPages){
          this.pagingPartnerParameter.pageNumber-- 
        }
        this.getPartner()
      },
      error: (e) => console.log(e),
      complete: () => console.log("complete")
    })
  }

  handlePartner(action: Action, data: Partner){
    switch (action) {
      case this.enumAction.CREATE:
        this.partnerService.createPartner(data).subscribe({
          next: (v) => this.partner = v,
          error: (e) => console.log(e),
          complete: () => console.log("complete")          
        })
        break;
      case this.enumAction.UPDATE:
        this.partnerService.updatePartner(data).subscribe({
          next: (v) => this.partner = v,
          error: (e) => console.log(e),
          complete: () => console.log("complete")        
        })
        break;
      default:
        break;
    }
  }

  getPartner(): void{
    this.partnerService.getPartners(this.pagingPartnerParameter).subscribe({
      next: (v) =>  {  
        this.paginationPartner = v;
        this.partner = this.paginationPartner.data[0] ?? null;
       },
      error: (e) => console.log(e),
      complete: () => console.log("completed"),
    })
  }

  onSearchPartner(){
    this.getPartner()
  }

  onPartnerPaging(pagingParameter: PagingParameter) {
    this.pagingPartnerParameter = pagingParameter
    this.getPartner() 
  }

  ngOnInit(): void {
    this.getPartner()
  }
  
}

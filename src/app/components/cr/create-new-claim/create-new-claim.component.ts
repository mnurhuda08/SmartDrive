import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerClaimRequest } from 'src/app/interfaces/cr/customer-claim-request';
import { CustomerRequest } from 'src/app/interfaces/cr/customer-request';
import { CustomerRequestService } from 'src/app/services/cr/customer-request.service';

@Component({
  selector: 'app-create-new-claim',
  templateUrl: './create-new-claim.component.html',
  styleUrls: ['./create-new-claim.component.css']
})
export class CreateNewClaimComponent implements OnInit {
  claimPolisForm!: FormGroup;
  customerRequest!: CustomerRequest;

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerRequestService: CustomerRequestService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.customerRequestService.getCustomerRequest(params['id'])
        .subscribe((res: CustomerRequest) => {
          this.customerRequest = res;
          console.log(this.customerRequest)
          this.claimPolisForm = new FormGroup({
            creqModifiedDate: new FormControl(this.customerRequest.creqModifiedDate),
            customerName: new FormControl({ value: this.customerRequest.creqCustEntity.userFullName, disabled: true }),
            createPolisDate: new FormControl({ value: this.customerRequest.creqCreateDate, disabled: true }),
            customerPhoneNumber: new FormControl({ value: this.customerRequest.creqCustEntity.userPhones[0].usphPhoneNumber, disabled: true }),
            insurancePlan: new FormControl({ value: this.customerRequest.customerInscAsset.ciasIntyName, disabled: true }),
            cityId: new FormControl({ value: this.customerRequest.customerInscAsset.ciasCityId, disabled: true }),
            areaCode: new FormControl({ value: 'BCY-0001', disabled: true }),
            carYear: new FormControl({ value: this.customerRequest.customerInscAsset.ciasYear, disabled: true }),
            policeNumber: new FormControl({ value: this.customerRequest.customerInscAsset.ciasPoliceNumber, disabled: true }),
            carSeries: new FormControl({ value: this.customerRequest.customerInscAsset.ciasCarsId, disabled: true }),
            polisCreatedOn: new FormControl({ value: this.customerRequest.customerInscAsset.ciasStartdate, disabled: true }),
            polisStartDate: new FormControl({ value: this.customerRequest.customerInscAsset.ciasStartdate, disabled: true }),
            polisEndDate: new FormControl({ value: this.customerRequest.customerInscAsset.ciasEnddate, disabled: true }),
            polisTotalPremi: new FormControl({ value: this.customerRequest.customerInscAsset.ciasTotalPremi, disabled: true }),
          })
        })
    })
  }

  get f(): any { return this.claimPolisForm.controls }

  onSubmit(): void {

    const creqEntityid: number = this.customerRequest.creqEntityid;
    const creqModifiedDate: string = this.f.creqModifiedDate.value;

    this.customerRequestService.claimPolis({ creqEntityid, creqModifiedDate } as CustomerClaimRequest)
      .subscribe(() => this.router.navigate(['customer']))
  }

  ngOnInit(): void {

  }

}

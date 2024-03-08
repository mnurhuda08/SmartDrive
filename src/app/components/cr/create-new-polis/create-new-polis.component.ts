import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, isFormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateCustomerRequest } from 'src/app/interfaces/cr/create-customer-request';
import { CreatePolisRequest } from 'src/app/interfaces/cr/create-polis-request';
import { CustomerRequest } from 'src/app/interfaces/cr/customer-request';
import { CustomerRequestService } from 'src/app/services/cr/customer-request.service';

@Component({
  selector: 'app-create-new-polis',
  templateUrl: './create-new-polis.component.html',
  styleUrls: ['./create-new-polis.component.css']
})
export class CreateNewPolisComponent implements OnInit {
  @ViewChild('createNewPolisModal') createNewPolisModal!: ElementRef;
  newPolisForm!: FormGroup;
  customerRequest!: CustomerRequest;
  message = '';

  constructor
    (
      private activatedRoute: ActivatedRoute,
      private customerRequestService: CustomerRequestService,
      private router: Router
    ) {
    this.activatedRoute.params.subscribe((params) => {
      this.customerRequestService.getCustomerRequest(params['id'])
        .subscribe((res: CustomerRequest) => {
          this.customerRequest = res;
          console.log(this.customerRequest)
          this.newPolisForm = new FormGroup({
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
            paidType: new FormControl({ value: this.customerRequest.customerInscAsset.ciasPaidType, disabled: true }),
            currentPrice: new FormControl({ value: this.customerRequest.customerInscAsset.ciasCurrentPrice, disabled: true }),
            insurancePrice: new FormControl({ value: this.customerRequest.customerInscAsset.ciasInsurancePrice, disabled: true }),
            polisTotalPremi: new FormControl({ value: this.customerRequest.customerInscAsset.ciasTotalPremi, disabled: true }),
          })
        })
    })
  }

  get f(): any { return this.newPolisForm.controls }

  ngOnInit(): void {
  }


  onSubmit(): void {

    const creqEntityid: number = this.customerRequest.creqEntityid;

    this.customerRequestService.createPolis({ creqEntityid } as CreatePolisRequest)
      .subscribe(() => this.router.navigate(['customer']))
  }
}




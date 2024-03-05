import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, isFormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateCustomerRequest } from 'src/app/interfaces/cr/create-customer-request';
import { CustomerRequestService } from 'src/app/services/cr/customer-request.service';

@Component({
  selector: 'app-create-new-polis',
  templateUrl: './create-new-polis.component.html',
  styleUrls: ['./create-new-polis.component.css']
})
export class CreateNewPolisComponent implements OnInit {
  @ViewChild('createNewPolisModal') createNewPolisModal!: ElementRef;
  newPolisForm: FormGroup;
  message = '';

  constructor(
    private fb: FormBuilder,
    private customerRequestService: CustomerRequestService,
    private router: Router) {
    this.newPolisForm = this.fb.group({
      customerName: ['', Validators.required],
      createPolisDate: ['',],
      customerPhoneNumber: [''],
      insurancePlan: [''],
      cityId: [''],
      areaCode: [''],
      carYear: [''],
      policeNumber: [''],
      carSeries: [''],
      polisStartDate: [''],
      paidType: [''],
      currentPrice: [''],
      grantUser: false
    })
  }

  ngOnInit(): void {
    // this.CreatePolisDate.setValue(this.getCurrentDateString());
    // this.PolisStartDate.setValue(this.getCurrentDateString());
  }


  createNewPolis() {
    let request: CreateCustomerRequest = {
      empEntityid: 1040,
      isGranted: this.Granted.value,
      areaCode: this.AreaCode.value,
      creqCreateDate: this.CreatePolisDate.value,
      customerDto: {
        customerName: this.CustomerName.value,
        phoneNumber: this.CustomerPhoneNumber.value
      },
      customerInscAsset: {
        ciasPoliceNumber: this.PoliceNumber.value,
        ciasYear: this.CarYear.value,
        ciasStartdate: this.PolisStartDate.value,
        ciasEnddate: null,
        ciasCurrentPrice: this.CurrentPrice.value,
        ciasInsurancePrice: null,
        ciasTotalPremi: null,
        ciasPaidType: this.PaidType.value,
        ciasIsNewChar: 'Y',
        ciasCarsId: this.CarSeries.value,
        ciasIntyName: this.InsurancePlan.value,
        ciasCityId: this.CityId.value
      }
    };

    this.customerRequestService.createCustomerRequest(request).subscribe((res: any) => {
      this.message = res.toString();
      this.router.navigate(['customer']);
    })

    if (this.createNewPolisModal) {
      const modalElement: HTMLElement = this.createNewPolisModal.nativeElement;
      modalElement.classList.remove('show');
      modalElement.style.display = 'none';
      document.body.classList.remove('modal-open');
      const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
      if (modalBackdrop) {
        modalBackdrop.remove();
      }
    }
  }

  get CustomerName(): FormControl {
    return this.newPolisForm.get('customerName') as FormControl;
  }
  get CreatePolisDate(): FormControl {
    return this.newPolisForm.get('createPolisDate') as FormControl;
  }
  get CustomerPhoneNumber(): FormControl {
    return this.newPolisForm.get('customerPhoneNumber') as FormControl;
  }
  get InsurancePlan(): FormControl {
    return this.newPolisForm.get('insurancePlan') as FormControl;
  }
  get CityId(): FormControl {
    return this.newPolisForm.get('cityId') as FormControl;
  }
  get AreaCode(): FormControl {
    return this.newPolisForm.get('areaCode') as FormControl;
  }
  get CarYear(): FormControl {
    return this.newPolisForm.get('carYear') as FormControl;
  }
  get PoliceNumber(): FormControl {
    return this.newPolisForm.get('policeNumber') as FormControl;
  }
  get CarSeries(): FormControl {
    return this.newPolisForm.get('carSeries') as FormControl;
  }
  get PolisStartDate(): FormControl {
    return this.newPolisForm.get('polisStartDate') as FormControl;
  }
  get PaidType(): FormControl {
    return this.newPolisForm.get('paidType') as FormControl;
  }
  get CurrentPrice(): FormControl {
    return this.newPolisForm.get('currentPrice') as FormControl;
  }
  get Granted(): FormControl {
    return this.newPolisForm.get('grantUser') as FormControl;
  }
}

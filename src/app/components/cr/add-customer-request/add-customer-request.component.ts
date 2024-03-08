import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateCustomerRequest } from 'src/app/interfaces/cr/create-customer-request';
import { RequestPolisCustomer } from 'src/app/interfaces/cr/request-polis-customer';
import { CustomerRequestService } from 'src/app/services/cr/customer-request.service';

@Component({
  selector: 'app-add-customer-request',
  templateUrl: './add-customer-request.component.html',
  styleUrls: ['./add-customer-request.component.css']
})
export class AddCustomerRequestComponent implements OnInit {
  requestPolisForm!: FormGroup;
  message = '';

  constructor(
    private fb: FormBuilder,
    private customerRequestService: CustomerRequestService,
    private router: Router
  ) {
    this.requestPolisForm = this.fb.group({
      customerName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z].*'),
        ]
      ],
      createPolisDate: ['',],
      customerPhoneNumber: ['',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10,12}')
        ]],
      insurancePlan: [''],
      cityId: [''],
      areaCode: ['',
        [
          Validators.required,
        ]],
      carYear: ['',
        [
          Validators.required,
          Validators.maxLength(4)
        ]],
      policeNumber: ['',
        [
          Validators.required,
        ]],
      carSeries: [''],
      polisStartDate: [''],
      paidType: [''],
      currentPrice: ['',
        [
          Validators.required,
        ]],
    })
  }

  onSubmit() {
    let request: RequestPolisCustomer = {
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

    console.log(request);

    this.customerRequestService.createRequestByCustomer(request).subscribe((res: any) => {
      this.message = res.toString();
      this.router.navigate(['customer']);
    })
  }


  get CustomerName(): FormControl {
    return this.requestPolisForm.get('customerName') as FormControl;
  }
  get CreatePolisDate(): FormControl {
    return this.requestPolisForm.get('createPolisDate') as FormControl;
  }
  get CustomerPhoneNumber(): FormControl {
    return this.requestPolisForm.get('customerPhoneNumber') as FormControl;
  }
  get InsurancePlan(): FormControl {
    return this.requestPolisForm.get('insurancePlan') as FormControl;
  }
  get CityId(): FormControl {
    return this.requestPolisForm.get('cityId') as FormControl;
  }
  get AreaCode(): FormControl {
    return this.requestPolisForm.get('areaCode') as FormControl;
  }
  get CarYear(): FormControl {
    return this.requestPolisForm.get('carYear') as FormControl;
  }
  get PoliceNumber(): FormControl {
    return this.requestPolisForm.get('policeNumber') as FormControl;
  }
  get CarSeries(): FormControl {
    return this.requestPolisForm.get('carSeries') as FormControl;
  }
  get PolisStartDate(): FormControl {
    return this.requestPolisForm.get('polisStartDate') as FormControl;
  }
  get PaidType(): FormControl {
    return this.requestPolisForm.get('paidType') as FormControl;
  }
  get CurrentPrice(): FormControl {
    return this.requestPolisForm.get('currentPrice') as FormControl;
  }

  ngOnInit(): void {
  }

}

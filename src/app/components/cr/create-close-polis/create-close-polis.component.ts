import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerCloseRequest } from 'src/app/interfaces/cr/customer-close-request';
import { CustomerRequest } from 'src/app/interfaces/cr/customer-request';
import { CustomerRequestService } from 'src/app/services/cr/customer-request.service';

@Component({
  selector: 'app-create-close-polis',
  templateUrl: './create-close-polis.component.html',
  styleUrls: ['./create-close-polis.component.css']
})
export class CreateClosePolisComponent implements OnInit {
  closePolisForm!: FormGroup;
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
          // console.log(res);
          this.closePolisForm = new FormGroup({
            cuclCreateDate: new FormControl(this.customerRequest.customerClaim.cuclCreateDate),
            cuclReason: new FormControl(this.customerRequest.customerClaim.cuclReason),
            customerName: new FormControl({ value: this.customerRequest.creqCustEntity.userFullName, disabled: true }),
            createPolisDate: new FormControl({ value: this.convertStampToDate(this.customerRequest.creqCreateDate), disabled: true }),
            customerPhoneNumber: new FormControl({ value: this.customerRequest.creqCustEntity.userPhones[0].usphPhoneNumber, disabled: true }),
            insurancePlan: new FormControl({ value: this.customerRequest.customerInscAsset.ciasIntyName, disabled: true }),
            cityId: new FormControl({ value: this.customerRequest.customerInscAsset.ciasCityId, disabled: true }),
            areaCode: new FormControl({ value: 'BCY-0001', disabled: true }),
            carYear: new FormControl({ value: this.customerRequest.customerInscAsset.ciasYear, disabled: true }),
            policeNumber: new FormControl({ value: this.customerRequest.customerInscAsset.ciasPoliceNumber, disabled: true }),
            carSeries: new FormControl({ value: this.customerRequest.customerInscAsset.ciasCarsId, disabled: true }),
            polisNumber: new FormControl({ value: this.customerRequest.servs[1]?.servInsuranceNo, disabled: true }),
            polisCreatedOn: new FormControl({ value: this.convertStampToDate(this.customerRequest.customerInscAsset.ciasStartdate), disabled: true }),
            polisStartDate: new FormControl({ value: this.convertStampToDate(this.customerRequest.customerInscAsset.ciasStartdate), disabled: true }),
            polisEndDate: new FormControl({ value: this.customerRequest.customerInscAsset.ciasEnddate, disabled: true }),
            polisTotalPremi: new FormControl({ value: this.customerRequest.customerInscAsset.ciasTotalPremi, disabled: true }),
          })
        })
    })
  }

  get f(): any { return this.closePolisForm.controls }

  onSubmit(): void {
    const creqEntityid: number = this.customerRequest.creqEntityid;
    const cuclCreateDate: string = this.f.cuclCreateDate.value;
    const cuclReason: string = this.f.cuclReason.value;

    this.customerRequestService.closePolis({ creqEntityid, cuclCreateDate, cuclReason } as CustomerCloseRequest)
      .subscribe(() => this.router.navigate(['customer']))
  }

  convertStampToDate(str: string) {
    const inputDate = new Date(str);

    const year = inputDate.getFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
    const day = inputDate.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }

  ngOnInit(): void {
  }

}

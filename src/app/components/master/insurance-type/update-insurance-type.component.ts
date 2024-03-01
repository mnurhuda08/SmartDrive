import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InsuranceType } from 'src/app/interfaces/master/insurance-type';
import { InsuranceTypeService } from 'src/app/services/master/insurance-type.service';

@Component({
  selector: 'app-update-insurance-type',
  templateUrl: './update-insurance-type.component.html',
  styleUrls: ['./update-insurance-type.component.css'],
})
export class UpdateInsuranceTypeComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  insuranceType!: InsuranceType;

  constructor(
    private activatedRoute: ActivatedRoute,
    private insuranceTypeService: InsuranceTypeService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      //call service
      this.insuranceTypeService
        .getInsuranceType(params['name'])
        .subscribe((res: InsuranceType) => {
          this.insuranceType = res;
          this.form = new FormGroup({
            insurancetype_name: new FormControl(this.insuranceType.intyName),
            insurancetype_desc: new FormControl(this.insuranceType.intyDesc),
          });
        });
    });
  }

  get f(): any {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const intyName: string = this.f.insurancetype_name?.value;
    const intyDesc: string = this.f.insurancetype_desc?.value;

    this.insuranceTypeService
      .updateInsuranceType({ intyName, intyDesc } as InsuranceType)
      .subscribe(() => this.router.navigate(['master/insurance-type']));
  }

  ngOnInit(): void {}
}

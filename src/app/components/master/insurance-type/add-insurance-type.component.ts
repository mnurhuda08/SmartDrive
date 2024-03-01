import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InsuranceType } from 'src/app/interfaces/master/insurance-type';
import { InsuranceTypeService } from 'src/app/services/master/insurance-type.service';

@Component({
  selector: 'app-add-insurance-type',
  templateUrl: './add-insurance-type.component.html',
  styleUrls: ['./add-insurance-type.component.css'],
})
export class AddInsuranceTypeComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private insuranceTypeService: InsuranceTypeService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      inty_name: ['', Validators.required],
      inty_desc: ['', Validators.required],
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

    const intyName: string = this.f.inty_name?.value;
    const intyDesc: string = this.f.inty_desc?.value;

    this.insuranceTypeService
      .addInsuranceType({ intyName, intyDesc } as InsuranceType)
      .subscribe(() => this.router.navigate(['master/insurance-type']));
  }

  ngOnInit(): void {}
}

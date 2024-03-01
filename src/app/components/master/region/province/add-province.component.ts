import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Province } from 'src/app/interfaces/master/province';
import { ProvinceService } from 'src/app/services/master/province.service';

@Component({
  selector: 'app-add-province',
  templateUrl: './add-province.component.html',
  styleUrls: ['./add-province.component.css'],
})
export class AddProvinceComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private provinceService: ProvinceService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      province_name: ['', Validators.required],
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

    const provName: string = this.f.province_name?.value;

    this.provinceService
      .addProvince({ provName } as Province)
      .subscribe(() => this.router.navigate(['master/region']));
  }

  ngOnInit(): void {}
}

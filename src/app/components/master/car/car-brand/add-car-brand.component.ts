import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarBrand } from 'src/app/interfaces/master/car-brand';
import { CarBrandService } from 'src/app/services/master/car-brand.service';

@Component({
  selector: 'app-add-car-brand',
  templateUrl: './add-car-brand.component.html',
  styleUrls: ['./add-car-brand.component.css'],
})
export class AddCarBrandComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private carBrandService: CarBrandService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      cabr_name: ['', Validators.required],
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

    const cabrName: string = this.f.cabr_name?.value;

    this.carBrandService
      .addCarBrand({ cabrName } as CarBrand)
      .subscribe(() => this.router.navigate(['master/car']));
  }

  ngOnInit(): void {}
}

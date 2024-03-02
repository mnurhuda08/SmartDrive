import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarBrand } from 'src/app/interfaces/master/car-brand';
import { CarModel } from 'src/app/interfaces/master/car-model';
import { CarBrandService } from 'src/app/services/master/car-brand.service';
import { CarModelService } from 'src/app/services/master/car-model.service';

@Component({
  selector: 'app-add-car-model',
  templateUrl: './add-car-model.component.html',
  styleUrls: ['./add-car-model.component.css'],
})
export class AddCarModelComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  carBrands: CarBrand[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private carModelService: CarModelService,
    private carBrandService: CarBrandService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      carbrand_id: ['', Validators.required],
      carm_name: ['', Validators.required],
    });
  }

  getCarBrands() {
    this.carBrandService.getCarBrands().subscribe({
      next: (response) => {
        this.carBrands = response;
      },
      error: (error) => {
        console.error(error);
      },
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

    const carmCabrId: number = this.f.carBrand_id?.value;
    const carmName: string = this.f.carm_name?.value;

    this.carModelService
      .addCarModel({ carmCabrId, carmName } as CarModel)
      .subscribe(() => this.router.navigate(['master/car']));
  }

  ngOnInit(): void {
    this.getCarBrands();
  }
}

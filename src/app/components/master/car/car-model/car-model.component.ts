import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarBrand } from 'src/app/interfaces/master/car-brand';
import { CarModel } from 'src/app/interfaces/master/car-model';
import { CarBrandService } from 'src/app/services/master/car-brand.service';
import { CarModelService } from 'src/app/services/master/car-model.service';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.css'],
})
export class CarModelComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  title = 'Car Model';
  carModels: CarModel[] = [];
  carBrands: CarBrand[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private carModelService: CarModelService,
    private carBrandService: CarBrandService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      carBrand_id: ['', Validators.required],
      carModel_name: ['', Validators.required],
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

  ngOnInit(): void {
    this.getCarModels();
    this.getCarBrands(); 





    
  }

  getCarModels(): void {
    this.carModelService.getCarModels().subscribe({
      next: (response) => {
        this.carModels = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  updateCarModel(id: number): void {
    this.router.navigate(['master/car/carmodel/edit', id]);
  }

  deleteCarModel(carModel: CarModel): void {
    this.carModels = this.carModels.filter((f) => f !== carModel);
    this.carModelService.deleteCarModel(carModel).subscribe();
  }

  openModal(): void {
    const modalID = document.getElementById('carModelAddModal');
    if (modalID) {
      modalID.style.display = 'block';
    }
  }

  closeModal(): void {
    const modalID = document.getElementById('carModelAddModal');
    if (modalID) {
      modalID.style.display = 'none';
    }
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
    const carmName: string = this.f.carModel_name?.value;

    this.carModelService
      .addCarModel({ carmName, carmCabrId } as CarModel)
      .subscribe(() => this.closeModal());
  }
}

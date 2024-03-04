import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarBrand } from 'src/app/interfaces/master/car-brand';
import { CarBrandService } from 'src/app/services/master/car-brand.service';

@Component({
  selector: 'app-car-brand',
  templateUrl: './car-brand.component.html',
  styleUrls: ['./car-brand.component.css'],
})
export class CarBrandComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  title = 'Car Brand';
  carBrands: CarBrand[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private carBrandService: CarBrandService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      cabr_name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getCarBrands();
  }

  getCarBrands(): void {
    this.carBrandService.getCarBrands().subscribe({
      next: (response) => {
        this.carBrands = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  updateCarBrand(id: number): void {
    this.router.navigate(['master/car/carbrand/edit', id]);
  }

  deleteCarBrand(carBrand: CarBrand): void {
    this.carBrands = this.carBrands.filter((f) => f !== carBrand);
    this.carBrandService.deleteCarBrand(carBrand).subscribe();
  }

  openModal(): void {
    const modalID = document.getElementById('carBrandAddModal');
    if (modalID) {
      modalID.style.display = 'block';
    }
  }

  closeModal(): void {
    const modalID = document.getElementById('carBrandAddModal');
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

    const cabrName: string = this.f.cabr_name?.value;

    this.carBrandService
      .addCarBrand({ cabrName } as CarBrand)
      .subscribe(() => this.closeModal());
  }
}

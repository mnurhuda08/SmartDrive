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
      cabrName: ['', Validators.required],
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

  openAddModal(): void {
    const modalID = document.getElementById('carBrandAddModal');
    if (modalID) {
      modalID.style.display = 'block';
    }
  }

  closeAddModal(): void {
    const modalID = document.getElementById('carBrandAddModal');
    const modalBackdrop = document.getElementsByClassName('modal-backdrop');
    if (modalID) {
      modalID.style.display = 'none';
    }
  }

  // openDeleteModal(carbrId: number): void {
  //   const modalID = document.getElementById('deleteModal');
  //   if (modalID) {
  //     modalID.style.display = 'block';
  //   }
  // }

  // closeDeleteModal(): void {
  //   const modalID = document.getElementById('deleteModal');
  //   if (modalID) {
  //     modalID.style.display = 'none';
  //   }
  // }

  deleteCarBrand(event: any, cabrId: number) {
    if (confirm(`Delete this data ?`)) {
      event.target.innerText = 'Deleting....';
      this.carBrands = this.carBrands.filter((cb) => cb.cabrId !== cabrId);
      this.carBrandService.deleteCarBrand(cabrId).subscribe();
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

    const cabrName: string = this.f.cabrName?.value;

    this.carBrandService
      .addCarBrand({ cabrName } as CarBrand)
      .subscribe(() => this.closeAddModal());
  }
}

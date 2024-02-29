import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarBrand } from 'src/app/interfaces/master/car-brand';
import { CarBrandService } from 'src/app/services/master/car-brand.service';

@Component({
  selector: 'app-car-brand',
  templateUrl: './car-brand.component.html',
  styleUrls: ['./car-brand.component.css'],
})
export class CarBrandComponent implements OnInit {
  carBrands: CarBrand[] = [];

  constructor(
    private carBrandService: CarBrandService,
    private router: Router
  ) {}

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
  updateCarBrand(id: number) {
    this.router.navigate(['master/car/carbrand/edit', id]);
  }

  deleteCarBrand(carBrand: CarBrand) {
    this.carBrands.filter((f) => f !== carBrand);
    this.carBrandService.deleteCarBrand(carBrand).subscribe();
  }

  ngOnInit(): void {
    this.getCarBrands();
  }
}

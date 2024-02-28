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

  ngOnInit(): void {
    this.getCarBrands();
  }
}

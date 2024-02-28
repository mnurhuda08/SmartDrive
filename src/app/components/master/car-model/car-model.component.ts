import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarModel } from 'src/app/interfaces/master/car-model';
import { CarModelService } from 'src/app/services/master/car-model.service';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.css'],
})
export class CarModelComponent implements OnInit {
  carModels: CarModel[] = [];

  constructor(
    private carModelService: CarModelService,
    private router: Router
  ) {}

  getCarBrands() {
    this.carModelService.getCarBrands().subscribe(
      (response) => {
        this.carModels = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
    this.getCarBrands();
  }
}

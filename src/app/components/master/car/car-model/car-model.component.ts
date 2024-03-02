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

  getCarModels() {
    this.carModelService.getCarModels().subscribe({
      next: (response) => {
        this.carModels = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  
  updateCarModel(id: number) {
    this.router.navigate(['master/car/carmodel/edit', id]);
  }

  deleteCarModel(carModel: CarModel) {
    this.carModels.filter((f) => f !== carModel);
    this.carModelService.deleteCarModel(carModel).subscribe();
  }

  ngOnInit(): void {
    this.getCarModels();
  }
}

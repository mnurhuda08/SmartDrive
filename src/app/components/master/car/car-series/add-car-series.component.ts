import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarModel } from 'src/app/interfaces/master/car-model';
import { CarSeries } from 'src/app/interfaces/master/car-series';
import { CarModelService } from 'src/app/services/master/car-model.service';
import { CarSeriesService } from 'src/app/services/master/car-series.service';

@Component({
  selector: 'app-add-car-series',
  templateUrl: './add-car-series.component.html',
  styleUrls: ['./add-car-series.component.css'],
})
export class AddCarSeriesComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  carModels: CarModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private carSeriesService: CarSeriesService,
    private carModelService: CarModelService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      carmodel_id: ['', Validators.required],
      cars_name: ['', Validators.required],
    });
  }

  getCarModel() {
    this.carModelService.getCarModels().subscribe({
      next: (response) => {
        this.carModels = response;
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

    const carsCarmId: number = this.f.carModel_id?.value;
    const carsName: string = this.f.cars_name?.value;

    this.carSeriesService
      .addCarSeries({ carsCarmId, carsName } as CarSeries)
      .subscribe(() => this.router.navigate(['master/car']));
  }

  ngOnInit(): void {
    this.getCarModel();
  }
}

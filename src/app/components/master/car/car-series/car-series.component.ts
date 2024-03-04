import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarModel } from 'src/app/interfaces/master/car-model';
import { CarSeries } from 'src/app/interfaces/master/car-series';
import { CarModelService } from 'src/app/services/master/car-model.service';
import { CarSeriesService } from 'src/app/services/master/car-series.service';

@Component({
  selector: 'app-car-series',
  templateUrl: './car-series.component.html',
  styleUrls: ['./car-series.component.css'],
})
export class CarSeriesComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  title = 'Car Series';
  carSeriess: CarSeries[] = [];
  carModels: CarModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private carSeriesService: CarSeriesService,
    private carModelService: CarModelService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      carModel_id: ['', Validators.required],
      carSeries_name: ['', Validators.required],
      carSeries_seat: ['', Validators.required],
    });
  }

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

  ngOnInit(): void {
    this.getCarSeriess();
    this.getCarModels();
  }

  getCarSeriess(): void {
    this.carSeriesService.getAllCarSeries().subscribe({
      next: (response) => {
        this.carSeriess = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  updateCarSeries(id: number): void {
    this.router.navigate(['master/car/carseries/edit', id]);
  }

  deleteCarSeries(carSeries: CarSeries): void {
    this.carSeriess = this.carSeriess.filter((f) => f !== carSeries);
    this.carSeriesService.deleteCarSeries(carSeries).subscribe();
  }

  openModal(): void {
    const modalID = document.getElementById('carSeriesAddModal');
    if (modalID) {
      modalID.style.display = 'block';
    }
  }

  closeModal(): void {
    const modalID = document.getElementById('carSeriesAddModal');
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

    const carsCarmId: number = this.f.carModel_id?.value;
    const carsName: string = this.f.carSeries_name?.value;
    const carsPassenger: number = this.f.carSeries_seat?.value;

    this.carSeriesService
      .addCarSeries({ carsName, carsPassenger, carsCarmId } as CarSeries)
      .subscribe(() => this.closeModal());
  }
}

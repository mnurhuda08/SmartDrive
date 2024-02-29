import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarModel } from 'src/app/interfaces/master/car-model';
import { CarSeries } from 'src/app/interfaces/master/car-series';
import { CarSeriesService } from 'src/app/services/master/car-series.service';

@Component({
  selector: 'app-add-car-series',
  templateUrl: './add-car-series.component.html',
  styleUrls: ['./add-car-series.component.css'],
})
export class AddCarSeriesComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private carSeriesService: CarSeriesService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      cars_name: ['', Validators.required],
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

    const carsName: string = this.f.cars_name?.value;

    this.carSeriesService
      .addCarSeries({ carsName } as CarSeries)
      .subscribe(() => this.router.navigate(['master/car']));
  }

  ngOnInit(): void {}
}

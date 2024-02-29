import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarSeries } from 'src/app/interfaces/master/car-series';
import { CarSeriesService } from 'src/app/services/master/car-series.service';

@Component({
  selector: 'app-update-car-series',
  templateUrl: './update-car-series.component.html',
  styleUrls: ['./update-car-series.component.css'],
})
export class UpdateCarSeriesComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  carSeries!: CarSeries;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carSeriesService: CarSeriesService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      //call service
      this.carSeriesService
        .getCarSeries(params['id'])
        .subscribe((res: CarSeries) => {
          this.carSeries = res;
          this.form = new FormGroup({
            carSeries_id: new FormControl(this.carSeries.carsId),
            carSeries_name: new FormControl(this.carSeries.carsName),
          });
        });
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

    const carsId: number = this.f.carSeries_id?.value;
    const carsName: string = this.f.carSeries_name?.value;

    this.carSeriesService
      .updateCarSeries({ carsId, carsName } as CarSeries)
      .subscribe(() => this.router.navigate(['master/car']));
  }

  ngOnInit(): void {}
}

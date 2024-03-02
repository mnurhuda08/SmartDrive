import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarSeries } from 'src/app/interfaces/master/car-series';
import { CarSeriesService } from 'src/app/services/master/car-series.service';

@Component({
  selector: 'app-car-series',
  templateUrl: './car-series.component.html',
  styleUrls: ['./car-series.component.css'],
})
export class CarSeriesComponent implements OnInit {
  carSeries: CarSeries[] = [];

  constructor(
    private carSeriesService: CarSeriesService,
    private router: Router
  ) {}

  getCarSeries() {
    this.carSeriesService.getAllCarSeries().subscribe({
      next: (response) => {
        this.carSeries = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  updateCarSeries(id: number) {
    this.router.navigate(['master/car/carseries/edit', id]);
  }

  deleteCarSeries(carSeries: CarSeries) {
    this.carSeries.filter((f) => f !== carSeries);
    this.carSeriesService.deleteCarSeries(carSeries).subscribe();
  }

  ngOnInit(): void {
    this.getCarSeries();
  }
}

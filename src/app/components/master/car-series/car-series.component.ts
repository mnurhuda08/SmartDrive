import { Component, OnInit } from '@angular/core';
import { CarSeries } from 'src/app/interfaces/master/car-series';
import { CarSeriesService } from 'src/app/services/master/car-series.service';

@Component({
  selector: 'app-car-series',
  templateUrl: './car-series.component.html',
  styleUrls: ['./car-series.component.css'],
})
export class CarSeriesComponent implements OnInit {
  carSeries: CarSeries[] = [];

  constructor(private carSeriesService: CarSeriesService) {}

  getCarBrands() {
    this.carSeriesService.getCarSeries().subscribe(
      (response) => {
        this.carSeries = response;
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

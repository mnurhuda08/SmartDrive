import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/interfaces/master/city';
import { CityService } from 'src/app/services/master/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {
  cities: City[] = [];

  constructor(private cityService: CityService, private router: Router) {}

  getCities() {
    this.cityService.getCities().subscribe({
      next: (response) => {
        this.cities = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  updateCity(id: number) {
    this.router.navigate(['master/region/city/edit', id]);
  }

  deleteCity(cities: City) {
    this.cities.filter((f) => f !== cities);
    this.cityService.deleteCity(cities).subscribe();
  }

  ngOnInit(): void {
    this.getCities();
  }
}

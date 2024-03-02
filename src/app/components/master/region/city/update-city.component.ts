import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/interfaces/master/city';
import { Province } from 'src/app/interfaces/master/province';
import { CityService } from 'src/app/services/master/city.service';
import { ProvinceService } from 'src/app/services/master/province.service';

@Component({
  selector: 'app-update-city',
  templateUrl: './update-city.component.html',
  styleUrls: ['./update-city.component.css'],
})
export class UpdateCityComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  provinces: Province[] = [];
  city!: City;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cityService: CityService,
    private provinceService: ProvinceService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      //call service
      this.cityService.getCity(params['id']).subscribe((res: City) => {
        this.city = res;
        this.form = new FormGroup({
          prov_id: new FormControl(this.city.cityProvId),
          city_id: new FormControl(this.city.cityId),
          city_name: new FormControl(this.city.cityName),
        });
      });
    });
  }

  getProvinces() {
    this.provinceService.getProvinces().subscribe({
      next: (response) => {
        this.provinces = response;
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

    const cityProvId: number = this.f.prov_id?.value;
    const cityId: number = this.f.city_id?.value;
    const cityName: string = this.f.city_name?.value;

    this.cityService
      .updateCity({ cityId, cityName, cityProvId } as City)
      .subscribe(() => this.router.navigate(['master/region']));
  }

  ngOnInit(): void {
    this.getProvinces();
  }
}

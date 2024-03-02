import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from 'src/app/interfaces/master/city';
import { Province } from 'src/app/interfaces/master/province';
import { CityService } from 'src/app/services/master/city.service';
import { ProvinceService } from 'src/app/services/master/province.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css'],
})
export class AddCityComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  provinces: Province[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private cityService: CityService,
    private provinceService: ProvinceService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      city_name: ['', Validators.required],
      province_id: ['', Validators.required],
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

    const cityName: string = this.f.city_name?.value;
    const cityProvId: number = this.f.province_id?.value;

    this.cityService
      .addCity({ cityName, cityProvId } as City)
      .subscribe(() => this.router.navigate(['master/region']));
  }

  ngOnInit(): void {
    this.getProvinces();
  }
}

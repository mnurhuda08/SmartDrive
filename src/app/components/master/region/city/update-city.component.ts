import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/interfaces/master/city';
import { CityService } from 'src/app/services/master/city.service';

@Component({
  selector: 'app-update-city',
  templateUrl: './update-city.component.html',
  styleUrls: ['./update-city.component.css'],
})
export class UpdateCityComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  city!: City;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cityService: CityService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      //call service
      this.cityService.getCity(params['id']).subscribe((res: City) => {
        this.city = res;
        this.form = new FormGroup({
          city_id: new FormControl(this.city.cityId),
          city_name: new FormControl(this.city.cityName),
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

    const cityId: number = this.f.city_id?.value;
    const cityName: string = this.f.city_name?.value;

    this.cityService
      .updateCity({ cityId, cityName } as City)
      .subscribe(() => this.router.navigate(['master/region']));
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from 'src/app/interfaces/master/city';
import { CityService } from 'src/app/services/master/city.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css'],
})
export class AddCityComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private cityService: CityService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      city_name: ['', Validators.required],
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

    this.cityService
      .addCity({ cityName } as City)
      .subscribe(() => this.router.navigate(['master/region']));
  }

  ngOnInit(): void {}
}

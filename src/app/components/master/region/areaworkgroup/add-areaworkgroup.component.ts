import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AreaWorkgroup } from 'src/app/interfaces/master/area-workgroup';
import { City } from 'src/app/interfaces/master/city';
import { AreaWorkgroupService } from 'src/app/services/master/area-workgroup.service';
import { CityService } from 'src/app/services/master/city.service';

@Component({
  selector: 'app-add-areaworkgroup',
  templateUrl: './add-areaworkgroup.component.html',
  styleUrls: ['./add-areaworkgroup.component.css'],
})
export class AddAreaworkgroupComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  cities: City[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private areaWorkgroupService: AreaWorkgroupService,
    private cityService: CityService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      city_id: ['', Validators.required],
      areaWorkgroup_code: ['', Validators.required],
      areaWorkgroup_desc: ['', Validators.required],
    });
  }

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

  get f(): any {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const arwgCityId: number = this.f.areaWorkgroup_code?.value;
    const arwgCode: string = this.f.areaWorkgroup_code?.value;
    const arwgDesc: string = this.f.areaWorkgroup_desc?.value;

    this.areaWorkgroupService
      .addAreaWorkgroup({ arwgCode, arwgDesc, arwgCityId } as AreaWorkgroup)
      .subscribe(() => this.router.navigate(['master/region']));
  }

  ngOnInit(): void {
    this.getCities();
  }
}

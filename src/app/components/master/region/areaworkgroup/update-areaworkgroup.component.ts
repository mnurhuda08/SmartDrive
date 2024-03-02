import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaWorkgroup } from 'src/app/interfaces/master/area-workgroup';
import { City } from 'src/app/interfaces/master/city';
import { AreaWorkgroupService } from 'src/app/services/master/area-workgroup.service';
import { CityService } from 'src/app/services/master/city.service';

@Component({
  selector: 'app-update-areaworkgroup',
  templateUrl: './update-areaworkgroup.component.html',
  styleUrls: ['./update-areaworkgroup.component.css'],
})
export class UpdateAreaworkgroupComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  cities: City[] = [];
  areaWorkgroup!: AreaWorkgroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private areaWorkgroupService: AreaWorkgroupService,
    private cityService: CityService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      //call service
      this.areaWorkgroupService
        .getAreaWorkgroup(params['code'])
        .subscribe((res: AreaWorkgroup) => {
          this.areaWorkgroup = res;
          this.form = new FormGroup({
            city_id: new FormControl(this.areaWorkgroup.arwgCityId),
            areaWorkgroup_code: new FormControl(this.areaWorkgroup.arwgCode),
            areaWorkgroup_desc: new FormControl(this.areaWorkgroup.arwgDesc),
          });
        });
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
      .updateAreaWorkgroup({ arwgCode, arwgDesc, arwgCityId } as AreaWorkgroup)
      .subscribe(() => this.router.navigate(['master/region']));
  }

  ngOnInit(): void {
    this.getCities();
  }
}

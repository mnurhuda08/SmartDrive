import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Province } from 'src/app/interfaces/master/province';
import { Zone } from 'src/app/interfaces/master/zone';
import { ProvinceService } from 'src/app/services/master/province.service';
import { ZoneService } from 'src/app/services/master/zone.service';

@Component({
  selector: 'app-add-province',
  templateUrl: './add-province.component.html',
  styleUrls: ['./add-province.component.css'],
})
export class AddProvinceComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  zones: Zone[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private provinceService: ProvinceService,
    private zoneService: ZoneService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      zone_id: ['', Validators.required],
      province_name: ['', Validators.required],
    });
  }

  getZones() {
    this.zoneService.getZones().subscribe({
      next: (response) => {
        this.zones = response;
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

    const provZonesId: number = this.f.zone_id?.value;
    const provName: string = this.f.province_name?.value;

    this.provinceService
      .addProvince({ provName, provZonesId } as Province)
      .subscribe(() => this.router.navigate(['master/region']));
  }

  ngOnInit(): void {
    this.getZones();
  }
}

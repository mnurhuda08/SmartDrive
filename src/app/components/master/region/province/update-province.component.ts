import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Province } from 'src/app/interfaces/master/province';
import { Zone } from 'src/app/interfaces/master/zone';
import { ProvinceService } from 'src/app/services/master/province.service';
import { ZoneService } from 'src/app/services/master/zone.service';

@Component({
  selector: 'app-update-province',
  templateUrl: './update-province.component.html',
  styleUrls: ['./update-province.component.css'],
})
export class UpdateProvinceComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  zones: Zone[] = [];
  province!: Province;

  constructor(
    private activatedRoute: ActivatedRoute,
    private zoneService: ZoneService,
    private provinceService: ProvinceService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      //call service
      this.provinceService
        .getProvince(params['id'])
        .subscribe((res: Province) => {
          this.province = res;
          this.form = new FormGroup({
            zone_id: new FormControl(this.province.provZonesId),
            province_id: new FormControl(this.province.provId),
            province_name: new FormControl(this.province.provName),
          });
        });
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
    const provId: number = this.f.province_id?.value;
    const provName: string = this.f.province_name?.value;

    this.provinceService
      .updateProvince({ provId, provName, provZonesId } as Province)
      .subscribe(() => this.router.navigate(['master/region']));
  }

  ngOnInit(): void {
    this.getZones();
  }
}

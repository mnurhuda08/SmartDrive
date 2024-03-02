import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Province } from 'src/app/interfaces/master/province';
import { RegionPlat } from 'src/app/interfaces/master/region-plat';
import { ProvinceService } from 'src/app/services/master/province.service';
import { RegionPlatService } from 'src/app/services/master/region-plat.service';

@Component({
  selector: 'app-add-region-plate',
  templateUrl: './add-region-plate.component.html',
  styleUrls: ['./add-region-plate.component.css'],
})
export class AddRegionPlateComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  provinces: Province[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private regionPlatService: RegionPlatService,
    private provinceService: ProvinceService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      province_id: ['', Validators.required],
      regionPlat_name: ['', Validators.required],
      regionPlat_desc: ['', Validators.required],
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

    const regpProvId: number = this.f.province_id?.value;
    const regpName: string = this.f.regionPlat_name?.value;
    const regpDesc: string = this.f.regionPlat_desc?.value;

    this.regionPlatService
      .addRegionPlat({ regpName, regpDesc, regpProvId } as RegionPlat)
      .subscribe(() => this.router.navigate(['master/region']));
  }

  ngOnInit(): void {
    this.getProvinces();
  }
}

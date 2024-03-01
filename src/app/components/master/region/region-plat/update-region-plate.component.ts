import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionPlat } from 'src/app/interfaces/master/region-plat';
import { RegionPlatService } from 'src/app/services/master/region-plat.service';

@Component({
  selector: 'app-update-region-plate',
  templateUrl: './update-region-plate.component.html',
  styleUrls: ['./update-region-plate.component.css'],
})
export class UpdateRegionPlateComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  regionPlat!: RegionPlat;

  constructor(
    private activatedRoute: ActivatedRoute,
    private regionPlatService: RegionPlatService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      //call service
      this.regionPlatService
        .getRegionPlat(params['name'])
        .subscribe((res: RegionPlat) => {
          this.regionPlat = res;
          this.form = new FormGroup({
            regionPlat_name: new FormControl(this.regionPlat.regpName),
            regionPlat_desc: new FormControl(this.regionPlat.regpDesc),
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

    const regpName: string = this.f.regionPlat_name?.value;
    const regpDesc: string = this.f.regionPlat_desc?.value;

    this.regionPlatService
      .updateRegionPlat({ regpName, regpDesc } as RegionPlat)
      .subscribe(() => this.router.navigate(['master/region']));
  }

  ngOnInit(): void {}
}

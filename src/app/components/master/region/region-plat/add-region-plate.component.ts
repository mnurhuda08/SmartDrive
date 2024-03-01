import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegionPlat } from 'src/app/interfaces/master/region-plat';
import { RegionPlatService } from 'src/app/services/master/region-plat.service';

@Component({
  selector: 'app-add-region-plate',
  templateUrl: './add-region-plate.component.html',
  styleUrls: ['./add-region-plate.component.css'],
})
export class AddRegionPlateComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private regionPlatService: RegionPlatService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      regionPlat_name: ['', Validators.required],
      regionPlat_desc: ['', Validators.required],
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
      .addRegionPlat({ regpName, regpDesc } as RegionPlat)
      .subscribe(() => this.router.navigate(['master/region']));
  }

  ngOnInit(): void {}
}

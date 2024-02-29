import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarBrand } from 'src/app/interfaces/master/car-brand';
import { CarBrandService } from 'src/app/services/master/car-brand.service';

@Component({
  selector: 'app-update-car-brand',
  templateUrl: './update-car-brand.component.html',
  styleUrls: ['./update-car-brand.component.css'],
})
export class UpdateCarBrandComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  carBrand!: CarBrand;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carBrandService: CarBrandService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      //call service
      this.carBrandService
        .getCarBrand(params['id'])
        .subscribe((res: CarBrand) => {
          this.carBrand = res;
          this.form = new FormGroup({
            carBrand_id: new FormControl(this.carBrand.cabrId),
            carBrand_name: new FormControl(this.carBrand.cabrName),
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

    const cabrId: number = this.f.carBrand_id?.value;
    const cabrName: string = this.f.carBrand_name?.value;

    this.carBrandService
      .updateCarBrand({ cabrId, cabrName } as CarBrand)
      .subscribe(() => this.router.navigate(['master/car']));
  }

  ngOnInit(): void {}
}

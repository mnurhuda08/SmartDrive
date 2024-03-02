import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarBrand } from 'src/app/interfaces/master/car-brand';
import { CarModel } from 'src/app/interfaces/master/car-model';
import { CarBrandService } from 'src/app/services/master/car-brand.service';
import { CarModelService } from 'src/app/services/master/car-model.service';

@Component({
  selector: 'app-update-car-model',
  templateUrl: './update-car-model.component.html',
  styleUrls: ['./update-car-model.component.css'],
})
export class UpdateCarModelComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  carBrands: CarBrand[] = [];
  carModel!: CarModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carModelService: CarModelService,
    private carBrandService: CarBrandService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      //call service
      this.carModelService
        .getCarModel(params['id'])
        .subscribe((res: CarModel) => {
          this.carModel = res;
          this.form = new FormGroup({
            carmId: new FormControl({
              value: this.carModel.carmId,
              disabled: false,
            }),
            carmIdCabrId: new FormControl({
              value: this.carModel.carmCabrId,
              disabled: false,
            }),
            carmName: new FormControl({
              value: this.carModel.carmName,
              disabled: false,
            }),
          });
        });
    });
  }

  getCarBrands() {
    this.carBrandService.getCarBrands().subscribe({
      next: (response) => {
        this.carBrands = response;
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

    const carmCabrId: number = this.f.carmId?.value;
    const carmId: number = this.f.carmCabrId?.value;
    const carmName: string = this.f.carmName?.value;

    this.carModelService
      .updateCarModel({ carmId, carmName, carmCabrId } as CarModel)
      .subscribe(() => this.router.navigate(['master/car']));
  }

  ngOnInit(): void {
    this.getCarBrands();
  }
}

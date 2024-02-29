import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarModel } from 'src/app/interfaces/master/car-model';
import { CarModelService } from 'src/app/services/master/car-model.service';

@Component({
  selector: 'app-update-car-model',
  templateUrl: './update-car-model.component.html',
  styleUrls: ['./update-car-model.component.css'],
})
export class UpdateCarModelComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  carModel!: CarModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carModelService: CarModelService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      //call service
      this.carModelService
        .getCarModel(params['id'])
        .subscribe((res: CarModel) => {
          this.carModel = res;
          this.form = new FormGroup({
            carModel_id: new FormControl(this.carModel.carmId),
            carModel_name: new FormControl(this.carModel.carmName),
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

    const carmId: number = this.f.carModel_id?.value;
    const carmName: string = this.f.carModel_name?.value;

    this.carModelService
      .updateCarModel({ carmId, carmName } as CarModel)
      .subscribe(() => this.router.navigate(['master/car']));
  }

  ngOnInit(): void {}
}

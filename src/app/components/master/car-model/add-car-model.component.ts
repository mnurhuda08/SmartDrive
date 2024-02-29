import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarModel } from 'src/app/interfaces/master/car-model';
import { CarModelService } from 'src/app/services/master/car-model.service';

@Component({
  selector: 'app-add-car-model',
  templateUrl: './add-car-model.component.html',
  styleUrls: ['./add-car-model.component.css'],
})
export class AddCarModelComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private carModelService: CarModelService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      carm_name: ['', Validators.required],
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

    const carmName: string = this.f.carm_name?.value;

    this.carModelService
      .addCarModel({ carmName } as CarModel)
      .subscribe(() => this.router.navigate(['master/car']));
  }

  ngOnInit(): void {}
}

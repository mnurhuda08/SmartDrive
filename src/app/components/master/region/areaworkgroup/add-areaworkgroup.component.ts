import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AreaWorkgroup } from 'src/app/interfaces/master/area-workgroup';
import { AreaWorkgroupService } from 'src/app/services/master/area-workgroup.service';

@Component({
  selector: 'app-add-areaworkgroup',
  templateUrl: './add-areaworkgroup.component.html',
  styleUrls: ['./add-areaworkgroup.component.css'],
})
export class AddAreaworkgroupComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private areaWorkgroupService: AreaWorkgroupService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      areaWorkgroup_code: ['', Validators.required],
      areaWorkgroup_desc: ['', Validators.required],
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

    const arwgCode: string = this.f.areaWorkgroup_code?.value;
    const arwgDesc: string = this.f.areaWorkgroup_desc?.value;

    this.areaWorkgroupService
      .addAreaWorkgroup({ arwgCode, arwgDesc } as AreaWorkgroup)
      .subscribe(() => this.router.navigate(['master/region']));
  }

  ngOnInit(): void {}
}

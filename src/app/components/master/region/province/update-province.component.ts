import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Province } from 'src/app/interfaces/master/province';
import { ProvinceService } from 'src/app/services/master/province.service';

@Component({
  selector: 'app-update-province',
  templateUrl: './update-province.component.html',
  styleUrls: ['./update-province.component.css'],
})
export class UpdateProvinceComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  province!: Province;

  constructor(
    private activatedRoute: ActivatedRoute,
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
            province_id: new FormControl(this.province.provId),
            province_name: new FormControl(this.province.provName),
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

    const provId: number = this.f.province_id?.value;
    const provName: string = this.f.province_name?.value;

    this.provinceService
      .updateProvince({ provId, provName } as Province)
      .subscribe(() => this.router.navigate(['master/region']));
  }

  ngOnInit(): void {}
}

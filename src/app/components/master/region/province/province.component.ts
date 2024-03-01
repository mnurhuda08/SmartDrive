import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Province } from 'src/app/interfaces/master/province';
import { ProvinceService } from 'src/app/services/master/province.service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css'],
})
export class ProvinceComponent implements OnInit {
  provinces: Province[] = [];

  constructor(
    private provinceService: ProvinceService,
    private router: Router
  ) {}

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

  updateProvince(id: number) {
    this.router.navigate(['master/region/province/edit', id]);
  }

  deleteProvince(provinces: Province) {
    this.provinces.filter((f) => f !== provinces);
    this.provinceService.deleteProvince(provinces).subscribe();
  }

  ngOnInit(): void {
    this.getProvinces();
  }
}

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
  currentPage: number = 1;
  pageSize: number = 10;
  totalItems = 0;

  constructor(
    private provinceService: ProvinceService,
    private router: Router
  ) {}

  getProvincesPaging() {
    this.provinceService
      .getPaginatedProvinsi(this.currentPage, this.pageSize)
      .subscribe((response) => {
        this.provinces = response;
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

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getProvincesPaging();
  }
  onPageSizeChange(event: Event): void {
    const target = (event.target as HTMLSelectElement).value!;
    const pageSize = parseInt(target, 10);
    this.pageSize = pageSize;
    this.getProvincesPaging();
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

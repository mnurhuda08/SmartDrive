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
  title = 'Province';
  provinces: Province[] = [];
  totalItems: number = 0;
  currentPage: number = 1;
  pageSize: number = 5;
  searchQuery: string = '';

  constructor(
    private provinceService: ProvinceService,
    private router: Router
  ) {}

  getProvincesPaging() {
    this.provinceService
      .getPaginatedProvinsi(this.searchQuery, this.currentPage, this.pageSize)
      .subscribe((response) => {
        this.provinces = response.provinces;
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

  pageChanged(event: any): void {
    this.currentPage = event;
  }

  onPageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.currentPage = 1;
  }

  searchProvinsi(): void {
    this.currentPage = 1;
    this.getProvincesPaging();
  }

  updateProvince(id: number) {
    this.router.navigate(['master/region/province/edit', id]);
  }

  deleteProvince(event: any, provinces: Province) {
    if (confirm('Delete this data ?')) {
      event.target.innerText = 'Deleting...';
      this.provinces.filter((f) => f !== provinces);
      this.provinceService.deleteProvince(provinces).subscribe();
    }
  }

  ngOnInit(): void {
    this.getProvinces();
    this.getProvincesPaging();
  }
}

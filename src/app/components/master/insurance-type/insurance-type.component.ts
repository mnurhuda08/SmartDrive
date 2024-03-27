import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceType } from 'src/app/interfaces/master/insurance-type';
import { InsuranceTypeService } from 'src/app/services/master/insurance-type.service';

@Component({
  selector: 'app-insurance-type',
  templateUrl: './insurance-type.component.html',
  styleUrls: ['./insurance-type.component.css'],
})
export class InsuranceTypeComponent implements OnInit {
  insuranceTypes: InsuranceType[] = [];
  title = 'Insurance Type';

  constructor(
    private insuranceTypeService: InsuranceTypeService,
    private router: Router
  ) {}

  getCategories() {
    this.insuranceTypeService.getInsuranceTypes().subscribe({
      next: (response) => {
        this.insuranceTypes = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  updateInsuranceType(name: string) {
    this.router.navigate(['master/insurance-type/edit', name]);
  }

  deleteInsuranceType(event: any, insuranceTypes: InsuranceType) {
    if (confirm(`Delete this data ?`)) {
      event.target.innerText = 'Deleting....';
      this.insuranceTypes.filter((f) => f !== insuranceTypes);
      this.insuranceTypeService.deleteInsuranceType(insuranceTypes).subscribe();
    }
  }

  ngOnInit(): void {
    this.getCategories();
  }
}

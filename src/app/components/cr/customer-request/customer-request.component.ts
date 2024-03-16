import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagingParameter } from 'src/app/constants/PagingParameter';
import { CustomerRequest } from 'src/app/interfaces/cr/customer-request';
import { PaginationList } from 'src/app/interfaces/cr/pagination-list';
import { CustomerRequestService } from 'src/app/services/cr/customer-request.service';

@Component({
  selector: 'app-customer-request',
  templateUrl: './customer-request.component.html',
  styleUrls: ['./customer-request.component.css']
})
export class CustomerRequestComponent implements OnInit {
  customerRequest: CustomerRequest[] = [];
  p: number = 1;

  constructor(private customerRequestService: CustomerRequestService, private router: Router) { }

  getCustomerRequests() {
    this.customerRequestService.getCustomerRequests().subscribe({
      next: (v) => this.customerRequest = v,
      error: (e) => console.error(e),
      complete: () => console.info('completed')
    })
  }

  getDate(date: string) {
    let newDate = date?.split('T')[0]?.split('-')
    return `${newDate[2]}/${newDate[1]}/${newDate[0]}`
  }

  createNewPolis(id: number) {
    this.router.navigate(['customer/request/polis/', id])
  }

  createClaimPolis(id: number) {
    this.router.navigate(['customer/request/claim/', id])
  }

  createClosePolis(id: number) {
    this.router.navigate(['customer/request/close/', id])
  }

  ngOnInit(): void {
    this.getCustomerRequests();
  }

}

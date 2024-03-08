import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BlankComponent } from 'src/app/components/users/blank/blank.component';
import { CarBrandComponent } from 'src/app/components/master/car-brand/car-brand.component';
import { CarModelComponent } from 'src/app/components/master/car-model/car-model.component';
import { CustomerRequestComponent } from 'src/app/components/cr/customer-request/customer-request.component';
import { CreateNewClaimComponent } from 'src/app/components/cr/create-new-claim/create-new-claim.component';
import { CreateClosePolisComponent } from 'src/app/components/cr/create-close-polis/create-close-polis.component';
import { AddCustomerRequestComponent } from 'src/app/components/cr/add-customer-request/add-customer-request.component';
import { AddAgenRequestComponentn } from 'src/app/components/cr/add-agen-request/add-agen-request.component';
import { CreateNewPolisComponent } from 'src/app/components/cr/create-new-polis/create-new-polis.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'my-profile',
        component: BlankComponent,
      },
      {
        path: 'master/carbrand',
        component: CarBrandComponent,
      },
      {
        path: 'master/carmodel',
        component: CarModelComponent,
      },
      {
        path: 'master/carseries',
        component: CarModelComponent,
      },
      {
        path: 'customer',
        component: CustomerRequestComponent,
      },
      {
        path: 'customer/request/customer',
        component: AddCustomerRequestComponent,
      },
      {
        path: 'customer/request/agen',
        component: AddAgenRequestComponentn,
      },
      {
        path: 'customer/request/polis/:id',
        component: CreateNewPolisComponent,
      },
      {
        path: 'customer/request/claim/:id',
        component: CreateNewClaimComponent,
      },
      {
        path: 'customer/request/close/:id',
        component: CreateClosePolisComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }

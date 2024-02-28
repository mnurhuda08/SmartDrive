import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BlankComponent } from 'src/app/components/users/blank/blank.component';
import { CarBrandComponent } from 'src/app/components/master/car-brand/car-brand.component';
import { CarModelComponent } from 'src/app/components/master/car-model/car-model.component';
import { CustomerRequestComponent } from 'src/app/components/cr/customer-request/customer-request.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }

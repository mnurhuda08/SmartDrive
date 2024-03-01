import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CarBrandComponent } from 'src/app/components/master/car-brand/car-brand.component';
import { CarModelComponent } from 'src/app/components/master/car-model/car-model.component';
import { BlankComponent } from 'src/app/components/users/blank/blank.component'; 
import { PaymentPageComponentComponent } from 'src/app/components/payment/PaymentPage/payment.page.component/payment.page.component.component';
import { PaymentBatchComponent } from 'src/app/components/payment/Payment/payment.batch/payment.batch.component';

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
        path: 'payment/payment',
        component: PaymentPageComponentComponent,
      },
      {
        path: 'payment/payment-batch',
        component: PaymentBatchComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }

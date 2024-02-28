import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BlankComponent } from 'src/app/components/users/blank/blank.component';
import { CarComponent } from 'src/app/components/master/car/car.component';
import { AddCarBrandComponent } from 'src/app/components/master/car-brand/add-car-brand.component';
import { CarBrandComponent } from 'src/app/components/master/car-brand/car-brand.component';
import { CarModelComponent } from 'src/app/components/master/car-model/car-model.component';
import { ServiceordersComponent } from 'src/app/components/so/serviceorders/serviceorders.component';
import { ServicefeasibilityComponent } from 'src/app/components/so/servicefeasibility/servicefeasibility.component';
import { HttpClient } from '@angular/common/http';

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
        path: 'master/car',
        component: CarComponent,
      },
      {
        path: 'master/car/carbrand/add',
        component: AddCarBrandComponent,
      },
      {
        path: 'so',
        component: ServiceordersComponent,
      },
      {
        path:'so/:id',
        component:ServicefeasibilityComponent,
        providers:[HttpClient]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

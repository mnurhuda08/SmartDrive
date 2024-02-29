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
import { UpdateCarBrandComponent } from 'src/app/components/master/car-brand/update-car-brand.component';
import { AddCarModelComponent } from 'src/app/components/master/car-model/add-car-model.component';
import { UpdateCarModelComponent } from 'src/app/components/master/car-model/update-car-model.component';
import { AddCarSeriesComponent } from 'src/app/components/master/car-series/add-car-series.component';
import { UpdateCarSeriesComponent } from 'src/app/components/master/car-series/update-car-series.component';
import { CategoryComponent } from 'src/app/components/master/category/category.component';
import { AddCategoryComponent } from 'src/app/components/master/category/add-category.component';
import { UpdateCategoryComponent } from 'src/app/components/master/category/UpdateCategoryComponent';

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
        path: 'master/car/carbrand/edit/:id',
        component: UpdateCarBrandComponent,
      },
      {
        path: 'master/car/carmodel/add',
        component: AddCarModelComponent,
      },
      {
        path: 'master/car/carmodel/edit/:id',
        component: UpdateCarModelComponent,
      },
      {
        path: 'master/car/carseries/add',
        component: AddCarSeriesComponent,
      },
      {
        path: 'master/car/carseries/edit/:id',
        component: UpdateCarSeriesComponent,
      },
      {
        path: 'master/category',
        component: CategoryComponent,
      },
      {
        path: 'master/category/add',
        component: AddCategoryComponent,
      },
      {
        path: 'master/category/edit/:id',
        component: UpdateCategoryComponent,
      },
      {
        path: 'so',
        component: ServiceordersComponent,
      },
      {
        path: 'so/:id',
        component: ServicefeasibilityComponent,
        providers: [HttpClient],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//layout component
import { DashboardComponent } from './dashboard.component';
import { BlankComponent } from 'src/app/components/users/blank/blank.component';
//master component
import { CarComponent } from 'src/app/components/master/car/car.component';
import { AddCarBrandComponent } from 'src/app/components/master/car/car-brand/add-car-brand.component';
import { UpdateCarBrandComponent } from 'src/app/components/master/car/car-brand/update-car-brand.component';
import { AddCarModelComponent } from 'src/app/components/master/car/car-model/add-car-model.component';
import { UpdateCarModelComponent } from 'src/app/components/master/car/car-model/update-car-model.component';
import { AddCarSeriesComponent } from 'src/app/components/master/car/car-series/add-car-series.component';
import { UpdateCarSeriesComponent } from 'src/app/components/master/car/car-series/update-car-series.component';
import { CategoryComponent } from 'src/app/components/master/category/category.component';
import { AddCategoryComponent } from 'src/app/components/master/category/add-category.component';
import { UpdateCategoryComponent } from 'src/app/components/master/category/UpdateCategoryComponent';
import { InsuranceTypeComponent } from 'src/app/components/master/insurance-type/insurance-type.component';
import { AddInsuranceTypeComponent } from 'src/app/components/master/insurance-type/add-insurance-type.component';
import { UpdateInsuranceTypeComponent } from 'src/app/components/master/insurance-type/update-insurance-type.component';
import { ZoneComponent } from 'src/app/components/master/zone/zone.component';
import { AddZoneComponent } from 'src/app/components/master/zone/add-zone.component';
import { UpdateZoneComponent } from 'src/app/components/master/zone/update-zone.component';
import { ProvinceComponent } from 'src/app/components/master/region/province/province.component';
import { AddProvinceComponent } from 'src/app/components/master/region/province/add-province.component';
import { UpdateProvinceComponent } from 'src/app/components/master/region/province/update-province.component';
import { CityComponent } from 'src/app/components/master/region/city/city.component';
import { AddCityComponent } from 'src/app/components/master/region/city/add-city.component';
import { UpdateCityComponent } from 'src/app/components/master/region/city/update-city.component';
import { RegionPlateComponent } from 'src/app/components/master/region/region-plat/region-plate.component';
import { AddRegionPlateComponent } from 'src/app/components/master/region/region-plat/add-region-plate.component';
import { UpdateRegionPlateComponent } from 'src/app/components/master/region/region-plat/update-region-plate.component';
import { AreaworkgroupComponent } from 'src/app/components/master/region/areaworkgroup/areaworkgroup.component';
import { AddAreaworkgroupComponent } from 'src/app/components/master/region/areaworkgroup/add-areaworkgroup.component';
import { UpdateAreaworkgroupComponent } from 'src/app/components/master/region/areaworkgroup/update-areaworkgroup.component';
import { RegionComponent } from 'src/app/components/master/region/region.component';
import { ServiceordersComponent } from 'src/app/components/so/serviceorders/serviceorders.component';
import { ServicefeasibilityComponent } from 'src/app/components/so/servicefeasibility/servicefeasibility.component';

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
        path: 'master/insurance-type',
        component: InsuranceTypeComponent,
      },
      {
        path: 'master/insurance-type/add',
        component: AddInsuranceTypeComponent,
      },
      {
        path: 'master/insurance-type/edit/:id',
        component: UpdateInsuranceTypeComponent,
      },
      {
        path: 'master/zone',
        component: ZoneComponent,
      },
      {
        path: 'master/zone/add',
        component: AddZoneComponent,
      },
      {
        path: 'master/zone/edit/:id',
        component: UpdateZoneComponent,
      },
      {
        path: 'master/region',
        component: RegionComponent,
      },
      {
        path: 'master/region/province',
        component: ProvinceComponent,
      },
      {
        path: 'master/region/province/add',
        component: AddProvinceComponent,
      },
      {
        path: 'master/region/province/edit/:id',
        component: UpdateProvinceComponent,
      },
      {
        path: 'master/region/city',
        component: CityComponent,
      },
      {
        path: 'master/region/city/add',
        component: AddCityComponent,
      },
      {
        path: 'master/region/city/edit/:id',
        component: UpdateCityComponent,
      },
      {
        path: 'master/region/region-plat',
        component: RegionPlateComponent,
      },
      {
        path: 'master/region/region-plat/add',
        component: AddRegionPlateComponent,
      },
      {
        path: 'master/region/region-plat/edit/:id',
        component: UpdateRegionPlateComponent,
      },
      {
        path: 'master/region/areaworkgroup',
        component: AreaworkgroupComponent,
      },
      {
        path: 'master/region/areaworkgroup/add',
        component: AddAreaworkgroupComponent,
      },
      {
        path: 'master/region/areaworkgroup/edit/:id',
        component: UpdateAreaworkgroupComponent,
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

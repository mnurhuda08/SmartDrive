import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { ContentWrapperComponent } from './components/layout/content-wrapper/content-wrapper.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { CarSeriesComponent } from './components/master/car-series/car-series.component';
import { LoginComponent } from './components/users/login/login.component';
import { BlankComponent } from './components/users/blank/blank.component';
import { LoginLayoutComponent } from './components/layout/login-layout/login-layout.component';
import { DashboardLayoutComponent } from './components/layout/dashboard-layout/dashboard-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { CarComponent } from './components/master/car/car.component';
import { CarBrandComponent } from './components/master/car-brand/car-brand.component';
import { AddCarBrandComponent } from './components/master/car-brand/add-car-brand.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicefeasibilityComponent } from './components/so/servicefeasibility/servicefeasibility.component';
import { UpdateCarBrandComponent } from './components/master/car-brand/update-car-brand.component';
import { CarModelComponent } from './components/master/car-model/car-model.component';
import { AddCarModelComponent } from './components/master/car-model/add-car-model.component';
import { UpdateCarModelComponent } from './components/master/car-model/update-car-model.component';
import { UpdateCarSeriesComponent } from './components/master/car-series/update-car-series.component';
import { AddCarSeriesComponent } from './components/master/car-series/add-car-series.component';
import { CategoryComponent } from './components/master/category/category.component';
import { AddCategoryComponent } from './components/master/category/add-category.component';
import { UpdateCategoryComponent } from './components/master/category/UpdateCategoryComponent';
import { InsuranceTypeComponent } from './components/master/insurance-type/insurance-type.component';
import { AddInsuranceTypeComponent } from './components/master/insurance-type/add-insurance-type.component';
import { UpdateInsuranceTypeComponent } from './components/master/insurance-type/update-insurance-type.component';
import { ZoneComponent } from './components/master/zone/zone.component';
import { AddZoneComponent } from './components/master/zone/add-zone.component';
import { UpdateZoneComponent } from './components/master/zone/update-zone.component';
import { ProvinceComponent } from './components/master/region/province/province.component';
import { AddProvinceComponent } from './components/master/region/province/add-province.component';
import { UpdateProvinceComponent } from './components/master/region/province/update-province.component';
import { CityComponent } from './components/master/region/city/city.component';
import { AddCityComponent } from './components/master/region/city/add-city.component';
import { UpdateCityComponent } from './components/master/region/city/update-city.component';
import { RegionPlateComponent } from './components/master/region/region-plat/region-plate.component';
import { AreaworkgroupComponent } from './components/master/region/areaworkgroup/areaworkgroup.component';
import { AddAreaworkgroupComponent } from './components/master/region/areaworkgroup/add-areaworkgroup.component';
import { UpdateAreaworkgroupComponent } from './components/master/region/areaworkgroup/update-areaworkgroup.component';
import { RegionComponent } from './components/master/region/region.component';
import { AddRegionPlateComponent } from './components/master/region/region-plat/add-region-plate.component';
import { UpdateRegionPlateComponent } from './components/master/region/region-plat/update-region-plate.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentWrapperComponent,
    FooterComponent,
    SidebarComponent,
    CarComponent,
    CarBrandComponent,
    AddCarBrandComponent,
    UpdateCarBrandComponent,
    CarModelComponent,
    AddCarModelComponent,
    UpdateCarModelComponent,
    CarSeriesComponent,
    LoginComponent,
    BlankComponent,
    LoginLayoutComponent,
    DashboardLayoutComponent,
    UpdateCarSeriesComponent,
    AddCarSeriesComponent,
    CategoryComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    InsuranceTypeComponent,
    AddInsuranceTypeComponent,
    UpdateInsuranceTypeComponent,
    ZoneComponent,
    AddZoneComponent,
    UpdateZoneComponent,
    ProvinceComponent,
    AddProvinceComponent,
    UpdateProvinceComponent,
    CityComponent,
    AddCityComponent,
    UpdateCityComponent,
    RegionPlateComponent,
    AddRegionPlateComponent,
    UpdateRegionPlateComponent,
    AreaworkgroupComponent,
    AddAreaworkgroupComponent,
    UpdateAreaworkgroupComponent,
    RegionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

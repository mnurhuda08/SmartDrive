import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContentWrapperComponent } from './components/layout/content-wrapper/content-wrapper.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { LoginLayoutComponent } from './components/layout/login-layout/login-layout.component';
import { DashboardLayoutComponent } from './components/layout/dashboard-layout/dashboard-layout.component';
//sample Component
import { BlankComponent } from './components/users/blank/blank.component';
//user Component
import { LoginComponent } from './components/users/login/login.component';
//Master Component
import { CarComponent } from './components/master/car/car.component';
import { CarBrandComponent } from './components/master/car/car-brand/car-brand.component';
import { AddCarBrandComponent } from './components/master/car/car-brand/add-car-brand.component';
import { UpdateCarBrandComponent } from './components/master/car/car-brand/update-car-brand.component';
import { CarModelComponent } from './components/master/car/car-model/car-model.component';
import { AddCarModelComponent } from './components/master/car/car-model/add-car-model.component';
import { UpdateCarModelComponent } from './components/master/car/car-model/update-car-model.component';
import { CarSeriesComponent } from './components/master/car/car-series/car-series.component';
import { UpdateCarSeriesComponent } from './components/master/car/car-series/update-car-series.component';
import { AddCarSeriesComponent } from './components/master/car/car-series/add-car-series.component';
import { CategoryComponent } from './components/master/category/category.component';
import { AddCategoryComponent } from './components/master/category/add-category.component';
import { UpdateCategoryComponent } from './components/master/category/UpdateCategoryComponent';
import { InsuranceTypeComponent } from './components/master/insurance-type/insurance-type.component';
import { AddInsuranceTypeComponent } from './components/master/insurance-type/add-insurance-type.component';
import { UpdateInsuranceTypeComponent } from './components/master/insurance-type/update-insurance-type.component';
import { ZoneComponent } from './components/master/zone/zone.component';
import { AddZoneComponent } from './components/master/zone/add-zone.component';
import { UpdateZoneComponent } from './components/master/zone/update-zone.component';
import { RegionComponent } from './components/master/region/region.component';
import { ProvinceComponent } from './components/master/region/province/province.component';
import { AddProvinceComponent } from './components/master/region/province/add-province.component';
import { UpdateProvinceComponent } from './components/master/region/province/update-province.component';
import { CityComponent } from './components/master/region/city/city.component';
import { AddCityComponent } from './components/master/region/city/add-city.component';
import { UpdateCityComponent } from './components/master/region/city/update-city.component';
import { RegionPlateComponent } from './components/master/region/region-plat/region-plate.component';
import { AddRegionPlateComponent } from './components/master/region/region-plat/add-region-plate.component';
import { UpdateRegionPlateComponent } from './components/master/region/region-plat/update-region-plate.component';
import { AreaworkgroupComponent } from './components/master/region/areaworkgroup/areaworkgroup.component';
import { AddAreaworkgroupComponent } from './components/master/region/areaworkgroup/add-areaworkgroup.component';
import { UpdateAreaworkgroupComponent } from './components/master/region/areaworkgroup/update-areaworkgroup.component';
//so component
import { ServicefeasibilityComponent } from './components/so/servicefeasibility/servicefeasibility.component';

import { AuthInterceptorInterceptor } from './services/interceptors/auth-interceptor.interceptor';
import { UnauthorizedComponent } from './components/error/unauthorized/unauthorized.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ForgotPasswordComponent } from './components/users/forgot-password/forgot-password.component';
import { PartnerPage } from './components/partners/pages/partner/partner.page';
import { TableComponent } from './components/partners/components/table/table.component';
import { ModalComponent } from './components/partners/components/modal/modal.component';
import { PartnerFormsComponent } from './components/partners/components/partner-forms/partner-forms.component';
import { PaginationComponent } from './components/partners/components/pagination/pagination.component';
import { PartnerContactFormsComponent } from './components/partners/components/partner-contact-forms/partner-contact-forms.component';
import { PartnerAreaWorkgroupFormsComponent } from './components/partners/components/partner-area-workgroup-forms/partner-area-workgroup-forms.component';
import { PartnerAreaWorkgroupPage } from './components/partners/pages/partner-area-workgroup/partner-area-workgroup.page';
import { ModalWorkOrderComponent } from './components/partners/components/modal-work-order/modal-work-order.component';
import { ClaimsSparepartFormsComponent } from './components/partners/components/claims-sparepart-forms/claims-sparepart-forms.component';
import { ClaimEvidenceFormsComponent } from './components/partners/components/claim-evidence-forms/claim-evidence-forms.component';
import { CustomerRequestComponent } from './components/cr/customer-request/customer-request.component';
import { CreateNewPolisComponent } from './components/cr/create-new-polis/create-new-polis.component';
import { CreateNewClaimComponent } from './components/cr/create-new-claim/create-new-claim.component';
import { CreateClosePolisComponent } from './components/cr/create-close-polis/create-close-polis.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddCustomerRequestComponent } from './components/cr/add-customer-request/add-customer-request.component';
import { AddAgenRequestComponentn } from './components/cr/add-agen-request/add-agen-request.component';

@NgModule({
  declarations: [
    //layout
    AppComponent,
    NavbarComponent,
    ContentWrapperComponent,
    FooterComponent,
    SidebarComponent,
    DashboardLayoutComponent,
    //master
    CarComponent,
    CarBrandComponent,
    AddCarBrandComponent,
    UpdateCarBrandComponent,
    CarModelComponent,
    AddCarModelComponent,
    UpdateCarModelComponent,
    CarSeriesComponent,
    AddCarSeriesComponent,
    UpdateCarSeriesComponent,
    CategoryComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    InsuranceTypeComponent,
    AddInsuranceTypeComponent,
    UpdateInsuranceTypeComponent,
    ZoneComponent,
    AddZoneComponent,
    UpdateZoneComponent,
    RegionComponent,
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

    LoginComponent,
    LoginComponent,
    BlankComponent,
    LoginLayoutComponent,
    UnauthorizedComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    TableComponent,
    ModalComponent,
    PartnerFormsComponent,
    PaginationComponent,
    PartnerContactFormsComponent,
    PartnerAreaWorkgroupFormsComponent,
    PartnerAreaWorkgroupPage,
    PartnerPage,
    ModalWorkOrderComponent,
    ClaimsSparepartFormsComponent,
    ClaimEvidenceFormsComponent,
    CustomerRequestComponent,
    CreateNewPolisComponent,
    CreateNewClaimComponent,
    CreateClosePolisComponent,
    AddCustomerRequestComponent,
    AddAgenRequestComponentn,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

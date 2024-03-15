import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentWrapperComponent } from './components/layout/content-wrapper/content-wrapper.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { CarModelComponent } from './components/master/car-model/car-model.component';
import { CarSeriesComponent } from './components/master/car-series/car-series.component';
import { BlankComponent } from './components/users/blank/blank.component';
import { LoginComponent } from './components/users/login/login.component';
import { AuthInterceptorInterceptor } from './services/interceptors/auth-interceptor.interceptor';
import { UnauthorizedComponent } from './components/error/unauthorized/unauthorized.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginLayoutComponent } from './components/layout/login-layout/login-layout.component';
import { DashboardLayoutComponent } from './components/layout/dashboard-layout/dashboard-layout.component';
import { ServicefeasibilityComponent } from './components/so/servicefeasibility/servicefeasibility.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddCustomerRequestComponent } from './components/cr/add-customer-request/add-customer-request.component';
import { AddAgenRequestComponentn } from './components/cr/add-agen-request/add-agen-request.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentWrapperComponent,
    FooterComponent,
    SidebarComponent,
    CarModelComponent,
    CarSeriesComponent,
    LoginComponent,
    BlankComponent,
    LoginLayoutComponent,
    DashboardLayoutComponent,
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
    AddAgenRequestComponentn
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule
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
export class AppModule { }

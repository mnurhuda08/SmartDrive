import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
import { BankModifierComponent } from './components/payment/bank/crud/bank-modifier/bank-modifier.component'; 
import { UserAccountComponent } from './components/payment/user-account/user-account.component';
import { PaymentTransactionComponent } from './components/payment/payment-transaction/payment-transaction.component';
import { FintechModifierComponent } from './components/payment/fintech/crud/fintech-modifier/fintech-modifier.component';
import { PaymentPageComponentComponent } from './components/payment/PaymentPage/payment.page.component/payment.page.component.component';
import { PaymentBatchComponent } from './components/payment/Payment/payment.batch/payment.batch.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BlankComponent } from './components/users/blank/blank.component';
import { LoginComponent } from './components/users/login/login.component';
import { AuthInterceptorInterceptor } from './services/interceptors/auth-interceptor.interceptor';
import { UnauthorizedComponent } from './components/error/unauthorized/unauthorized.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginLayoutComponent } from './components/layout/login-layout/login-layout.component';
import { DashboardLayoutComponent } from './components/layout/dashboard-layout/dashboard-layout.component';
import { ServicefeasibilityComponent } from './components/so/servicefeasibility/servicefeasibility.component';
import { ForgotPasswordComponent } from './components/users/forgot-password/forgot-password.component'; 

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
    LoginLayoutComponent,
    DashboardLayoutComponent,
    BankModifierComponent, 
    UserAccountComponent,
    PaymentTransactionComponent,
    BlankComponent,
    FintechModifierComponent,
    PaymentPageComponentComponent,
    PaymentBatchComponent,
    RegisterComponent,
    ForgotPasswordComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
    // {
    //   provide: ErrorHandler,
    //   useClass: CustomErrorHandler,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { ContentWrapperComponent } from './components/layout/content-wrapper/content-wrapper.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { CarModelComponent } from './components/master/car-model/car-model.component';
import { CarSeriesComponent } from './components/master/car-series/car-series.component';
import { LoginComponent } from './components/users/login/login.component';
import { LoginLayoutComponent } from './components/layout/login-layout/login-layout.component';
import { DashboardLayoutComponent } from './components/layout/dashboard-layout/dashboard-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { BankComponent } from './components/payment/bank/bank.component';
import { BankModifierComponent } from './components/payment/bank/crud/bank-modifier/bank-modifier.component';
import { FintechComponent } from './components/payment/fintech/fintech.component';
import { UserAccountComponent } from './components/payment/user-account/user-account.component';
import { PaymentTransactionComponent } from './components/payment/payment-transaction/payment-transaction.component';
import { FormsModule } from '@angular/forms';
import { BlankComponent } from './components/users/blank/blank.component';

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
    BankComponent,
    BankModifierComponent,
    FintechComponent,
    UserAccountComponent,
    PaymentTransactionComponent,
    BlankComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

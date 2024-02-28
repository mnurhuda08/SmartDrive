import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { ContentWrapperComponent } from './components/layout/content-wrapper/content-wrapper.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { CarModelComponent } from './components/master/car-model/car-model.component';
import { CarSeriesComponent } from './components/master/car-series/car-series.component';
import { CarBrandComponent } from './components/master/car-brand/car-brand.component';
import { BankComponent } from './components/payment/bank/bank.component';
import { UserAccountComponent } from './components/payment/user-account/user-account.component';
import { FintechComponent } from './components/payment/fintech/fintech.component';
import { FormsModule } from '@angular/forms';
import { BankModifierComponent } from './components/payment/bank/crud/bank-modifier/bank-modifier.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentWrapperComponent,
    FooterComponent,
    SidebarComponent,
    CarBrandComponent,
    CarModelComponent,
    CarSeriesComponent,
    BankComponent,
    FintechComponent,
    UserAccountComponent, 
    BankModifierComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

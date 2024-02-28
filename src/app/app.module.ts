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
import { BlankComponent } from './components/users/blank/blank.component';
import { LoginLayoutComponent } from './components/layout/login-layout/login-layout.component';
import { DashboardLayoutComponent } from './components/layout/dashboard-layout/dashboard-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerRequestComponent } from './components/cr/customer-request/customer-request.component';
import { CreateNewPolisComponent } from './components/cr/create-new-polis/create-new-polis.component';
import { CustomerInfoComponent } from './components/cr/customer-info/customer-info.component';
import { VehicleInfoComponent } from './components/cr/vehicle-info/vehicle-info.component';
import { CreateNewClaimComponent } from './components/cr/create-new-claim/create-new-claim.component';
import { PolisInformationComponent } from './components/cr/polis-information/polis-information.component';
import { CreateClosePolisComponent } from './components/cr/create-close-polis/create-close-polis.component';

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
    CustomerRequestComponent,
    CreateNewPolisComponent,
    CustomerInfoComponent,
    VehicleInfoComponent,
    CreateNewClaimComponent,
    PolisInformationComponent,
    CreateClosePolisComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

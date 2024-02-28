import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { ContentWrapperComponent } from './components/layout/content-wrapper/content-wrapper.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { CarBrandComponent } from './components/master/car-brand/car-brand.component';
import { CarModelComponent } from './components/master/car-model/car-model.component';
import { CarSeriesComponent } from './components/master/car-series/car-series.component';
import { LoginComponent } from './components/users/login/login.component';
import { BlankComponent } from './components/users/blank/blank.component';
import { LoginLayoutComponent } from './components/layout/login-layout/login-layout.component';
import { DashboardLayoutComponent } from './components/layout/dashboard-layout/dashboard-layout.component';
import { PartnerPage } from './components/partners/pages/partner.page/partner.page.component';
import { TableComponent } from './components/partners/components/table/table.component';
import { ModalComponent } from './components/partners/components/modal/modal.component';

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
    LoginComponent,
    BlankComponent,
    LoginLayoutComponent,
    DashboardLayoutComponent,
    PartnerPage,
    TableComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

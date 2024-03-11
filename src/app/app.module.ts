import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { EmployeeComponent } from './components/hr/employee.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEmployeeComponent } from './components/hr/add-employee.component';
import { EmployeeAreaWorkGroupComponent } from './components/hr/employee-area-work-group/employee-area-work-group.component';
import { EditEmployeeComponent } from './components/hr/edit-employee/edit-employee.component';
import { LoaderComponent } from './components/hr/partial/loader/loader.component';
import { EditEmployeeAreaWorkgroupComponent } from './components/hr/employee-area-work-group/edit-employee-area-workgroup.component';
import { DataTablesModule } from 'angular-datatables'; 
import { MaterialModule } from './material-module';
import { NgxPaginationModule } from 'ngx-pagination';



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
    EmployeeComponent,
    AddEmployeeComponent,
    EmployeeAreaWorkGroupComponent,
    EditEmployeeComponent,
    LoaderComponent,
    EditEmployeeAreaWorkgroupComponent,



  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    AppRoutingModule, 
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
    MaterialModule,
    NgxPaginationModule,
    BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

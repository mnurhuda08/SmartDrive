import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CarBrandComponent } from 'src/app/components/master/car-brand/car-brand.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [DashboardComponent, CarBrandComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}

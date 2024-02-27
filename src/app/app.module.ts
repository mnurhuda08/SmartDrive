import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { ContentWrapperComponent } from './components/layout/content-wrapper/content-wrapper.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { CarBrandComponent } from './components/master/car-brand.component';
import { CarModelComponent } from './components/master/car-model/car-model.component';
import { CarSeriesComponent } from './components/master/car-series/car-series.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

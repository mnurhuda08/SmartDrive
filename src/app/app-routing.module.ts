import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarBrandComponent } from './components/master/car-brand/car-brand.component';
import { CarModelComponent } from './components/master/car-model/car-model.component';
import { CarSeriesComponent } from './components/master/car-series/car-series.component';

const routes: Routes = [
  { path: 'master/carbrand', component: CarBrandComponent },
  { path: 'master/carmodel', component: CarModelComponent },
  { path: 'master/carseries', component: CarSeriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

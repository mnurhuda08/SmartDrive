import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarBrandComponent } from './components/master/car-brand/car-brand.component';

const routes: Routes = [
  { path: 'master/carbrand', component: CarBrandComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

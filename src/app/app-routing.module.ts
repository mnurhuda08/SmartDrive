import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarBrandComponent } from './components/master/car-brand/car-brand.component';
import { BankComponent } from './components/payment/bank/bank.component';

const routes: Routes = [
  { path: 'master/carbrand', component: CarBrandComponent },
  { path: 'payment/bank', component: BankComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { MyProfileComponent } from 'src/app/components/users/my-profile/my-profile.component';
import { AuthGuard } from 'src/app/guard/admin-guard.guard';
import { DashboardComponent } from './dashboard.component';
import { UnauthorizedComponent } from 'src/app/components/error/unauthorized/unauthorized.component';
import { BlankComponent } from 'src/app/components/users/blank/blank.component';
import { PartnerPage } from 'src/app/components/partners/pages/partner/partner.page';
import { CarBrandComponent } from 'src/app/components/master/car-brand/car-brand.component';
import { CarModelComponent } from 'src/app/components/master/car-model/car-model.component';
import { ServiceordersComponent } from 'src/app/components/so/serviceorders/serviceorders.component';
import { ServicefeasibilityComponent } from 'src/app/components/so/servicefeasibility/servicefeasibility.component';
import { HttpClient } from '@angular/common/http';
import { UserListComponent } from 'src/app/components/users/user-list/user-list.component';
import { DataRoleComponent } from 'src/app/components/users/role/data-role/data-role.component';
import { PartnerAreaWorkgroupPage } from 'src/app/components/partners/pages/partner-area-workgroup/partner-area-workgroup.page';
import { CustomerRequestComponent } from 'src/app/components/cr/customer-request/customer-request.component';
import { CreateNewClaimComponent } from 'src/app/components/cr/create-new-claim/create-new-claim.component';
import { CreateClosePolisComponent } from 'src/app/components/cr/create-close-polis/create-close-polis.component';
import { AddCustomerRequestComponent } from 'src/app/components/cr/add-customer-request/add-customer-request.component';
import { AddAgenRequestComponentn } from 'src/app/components/cr/add-agen-request/add-agen-request.component';
import { CreateNewPolisComponent } from 'src/app/components/cr/create-new-polis/create-new-polis.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // canActivate: mapToCanActivate([AuthGuard]),
    // data: { requiredRoles: ['AD', 'CU', 'EM', 'PC', 'PR'] },
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'my-profile',
        component: MyProfileComponent,
        canActivate: mapToCanActivate([AuthGuard]),
        data: { requiredRoles: ['AD', 'CU', 'EM', 'PC', 'PR'] },
      },
      { path: 'unauthorized', component: UnauthorizedComponent },
      {
        path: 'master/carbrand',
        component: CarBrandComponent,
      },
      {
        path: 'master/carmodel',
        component: CarModelComponent,
      },
      {
        path: 'master/carseries',
        component: CarModelComponent,
      },
      {
        path: 'partner/partner',
        component: PartnerPage
      },
      {
        path: 'partner/workorder',
        component: PartnerAreaWorkgroupPage
      },
      {
        path: 'so',
        component: ServiceordersComponent,
      },
      {
        path: 'so/:id',
        component: ServicefeasibilityComponent,
        providers: [HttpClient],
      },
      {
        path: 'users',
        component: UserListComponent,
        canActivate: mapToCanActivate([AuthGuard]),
        data: { requiredRoles: ['AD', 'CU', 'EM', 'PC', 'PR'] },
      },
      {
        path: 'roles',
        component: DataRoleComponent,
        canActivate: mapToCanActivate([AuthGuard]),
        data: { requiredRoles: ['AD', 'CU', 'EM', 'PC', 'PR'] },
      },
      {
        path: 'customer',
        component: CustomerRequestComponent,
      },
      {
        path: 'customer/request/customer',
        component: AddCustomerRequestComponent,
      },
      {
        path: 'customer/request/agen',
        component: AddAgenRequestComponentn,
      },
      {
        path: 'customer/request/polis/:id',
        component: CreateNewPolisComponent,
      },
      {
        path: 'customer/request/claim/:id',
        component: CreateNewClaimComponent,
      },
      {
        path: 'customer/request/close/:id',
        component: CreateClosePolisComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }

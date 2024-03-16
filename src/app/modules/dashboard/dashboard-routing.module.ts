import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { MyProfileComponent } from 'src/app/components/users/my-profile/my-profile.component';
import { AuthGuard } from 'src/app/guard/admin-guard.guard';
import { DashboardComponent } from './dashboard.component';
import { UnauthorizedComponent } from 'src/app/components/error/unauthorized/unauthorized.component';
import { BlankComponent } from 'src/app/components/users/blank/blank.component';
import { CarBrandComponent } from 'src/app/components/master/car-brand/car-brand.component';
import { CarModelComponent } from 'src/app/components/master/car-model/car-model.component';
import { ServiceordersComponent } from 'src/app/components/so/serviceorders/serviceorders.component';
import { ServicefeasibilityComponent } from 'src/app/components/so/servicefeasibility/servicefeasibility.component';
import { HttpClient } from '@angular/common/http';
import { UserListComponent } from 'src/app/components/users/user-list/user-list.component';
import { DataRoleComponent } from 'src/app/components/users/role/data-role/data-role.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: mapToCanActivate([AuthGuard]),
    data: { requiredRoles: ['AD', 'CU', 'EM', 'PC', 'PR'] },
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
        path: 'so/page/:currentPage',
        component: ServiceordersComponent,
      },
      {
        path: 'so/:seroId',
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

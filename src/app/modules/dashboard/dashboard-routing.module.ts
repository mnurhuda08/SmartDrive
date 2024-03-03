import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { MyProfileComponent } from 'src/app/components/users/my-profile/my-profile.component';
import { AuthGuard } from 'src/app/guard/admin-guard.guard';
import { DashboardComponent } from './dashboard.component';
import { UnauthorizedComponent } from 'src/app/components/error/unauthorized/unauthorized.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

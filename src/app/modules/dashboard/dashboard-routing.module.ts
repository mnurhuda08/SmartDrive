import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BlankComponent } from 'src/app/components/users/blank/blank.component';
import { MyProfileComponent } from 'src/app/components/users/my-profile/my-profile.component';
import { PermissionGuard } from 'src/app/guard/permission-guard.guard';
import { AuthGuard } from 'src/app/guard/admin-guard.guard';
import { authGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate:mapToCanActivate([AuthGuard]),
    data:{requiredRoles:['EM']},
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'my-profile',
        component: MyProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BlankComponent } from 'src/app/components/users/blank/blank.component';
import { CarBrandComponent } from 'src/app/components/master/car-brand/car-brand.component';
import { CarModelComponent } from 'src/app/components/master/car-model/car-model.component';
import { EmployeeComponent } from 'src/app/components/hr/employee.component';
import { EditEmployeeComponent } from 'src/app/components/hr/edit-employee/edit-employee.component';
import { EditEmployeeAreaWorkgroupComponent } from 'src/app/components/hr/employee-area-work-group/edit-employee-area-workgroup.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'my-profile',
        component: BlankComponent,
      },
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
        path: 'hr/employee',
        component: EmployeeComponent,
      },
      {
        path: 'hr/employee/:id/edit',
        component: EditEmployeeComponent,
      },
      {
        path: 'hr/employee/:id/edit-employee-area-workgroup',
        component: EditEmployeeAreaWorkgroupComponent,
      },
     ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

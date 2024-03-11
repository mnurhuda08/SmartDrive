import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/interfaces/hr/employee';
import { EmployeeCreate } from 'src/app/interfaces/hr/employee-create';
import { EmployeeShow } from 'src/app/interfaces/hr/employee-show';
import { EmployeeUpdate } from 'src/app/interfaces/hr/employee-update';
import { EmployeeShowHr } from 'src/app/interfaces/hr/show/employee-show-hr';
import { Employees } from 'src/app/models/hr/employees';
import { Employeesshowhr } from 'src/app/models/hr/employeesshowhr';
import { UserAddressComposite } from 'src/app/models/hr/user-address-composite';
import { UserEmployeeComposite } from 'src/app/models/hr/user-employee-composite';
import { UserPhoneComposite } from 'src/app/models/hr/user-phone-composite';
import { EmployeeService } from 'src/app/services/hr/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  empEntityId! : any;
  employee! : Employeesshowhr;
  


  // var updateData  = {

  // }

  
  isLoading: boolean = false;
  loadingTitle : string = 'Loading';

  errors : any = [];

  constructor(private route: ActivatedRoute, private employeeService : EmployeeService ) {

  }
  updateEmployee(){
    var updateData = {
      empName: this.employee.empName,
      empType: this.employee.empType,
      empStatus: this.employee.empStatus,
      empGraduate: this.employee.empGraduate,
      empNetSalary: this.employee.empNetSalary,
      empAccountNumber: this.employee.empAccountNumber,
      empJobCode: this.employee.empJobCode,
      userComposite: {
        userEmail: this.employee.empEntity.userEmail,
        userNationalId: this.employee.empEntity.userNationalId,
        userNpwp: this.employee.empEntity.userNpwp,
        userAddressCompositeDto: {
          usdrId: 0,
          usdrAddress1: this.employee.empEntity.userAddresses[0].usdrAddress1 ,
          usdrAddress2: this.employee.empEntity.userAddresses[0].usdrAddress2,
          usdrCityId: this.employee.empEntity.userAddresses[0].usdrCityId
        }
      },
      grantUser: true
    }
    this.isLoading = true;
      this.employeeService.updateEmployee(updateData, this.empEntityId).subscribe({
        next: (res:any) => {
          console.log(res);
          alert("Update employee has been successfull")
          this.isLoading = false;
        },
        error: (err:any)=> {
          console.log(err);
          this.errors = err.error.errors;
          this.isLoading = false;
        }
        
      });
  }

  ngOnInit(){
    this.empEntityId = this.route.snapshot.paramMap.get('id');

    this.isLoading = true;
    this.employeeService.getEmployeeById(this.empEntityId).subscribe((res : any)=> {
      console.log(res)
      this.employee = res;

      this.isLoading=false;
    }
      ) 

    
    //alert(this.empEntityId);
  }
  
}

import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Employee } from 'src/app/interfaces/hr/employee';
import { EmployeeCreate } from 'src/app/interfaces/hr/employee-create';
import { EmployeeShow } from 'src/app/interfaces/hr/employee-show';
import { JobType } from 'src/app/interfaces/hr/job-type';
import { Employees } from 'src/app/models/hr/employees';
import { UserAddressComposite } from 'src/app/models/hr/user-address-composite';
import { UserEmployeeComposite } from 'src/app/models/hr/user-employee-composite';
import { UserPhoneComposite } from 'src/app/models/hr/user-phone-composite';
import { UserRoleComposite } from 'src/app/models/hr/user-role-composite';

import { EmployeeService } from 'src/app/services/hr/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  employeeForm: any;
  dataSaved = false;

  employeeData: Employee[] = [];
  createEmployee = new Employees();
  userAddressCompositeDto = new UserAddressComposite();
  userComposite = new UserEmployeeComposite()
  userPhoneCompositeDto = new UserPhoneComposite();
 

  jobTypeData : JobType[] = [];
  salaryJobType : JobType[] = [];

  isLoading: boolean = false;
  loadingTitle: string = 'Loading';

  errors: any = [];
  form: FormGroup;
  submitted = false;

  dtElement! : DataTableDirective;
  dtoptions: DataTables.Settings = {};
  dtTrigger : Subject<any> = new Subject<any>();

  roleType = "";


 onChangeSalary (event:Event){
  const target = event.target as HTMLSelectElement;
  this.roleType = target?.value as string;
  console.log("nama ", target.value)
  console.log("dslsty before",this.salaryJobType)
  this.salaryJobType = this.salaryJobType.filter((item)=> item.jobCode === "FAJ") 
  console.log("salaty filter",this.salaryJobType)
 }

  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService, private router: Router) {
    this.form = this.formBuilder.group({
      empName: ['', Validators.required]
    }) 
  }


  getEmployee() {
    this.employeeService.getEmployee().subscribe( res => {
      this.employeeData = res;
      this.dtTrigger.next(null);
    });

  }

  getJobType() {
    this.employeeService.getJobType().subscribe( res => {
      this.jobTypeData = res;
      this.salaryJobType = res;
      console.log(res)
      this.dtTrigger.next(null);
    });

  }



  deleteEmployee(event: any, id: number) {
    if (confirm('are you sure want to delete this data?')) {
      event.target.innerText = "Deleting...";
      this.employeeService.deleteEmployee(id).subscribe((res: any) => {
        this.getEmployee();
        alert(res.message);
      }
      )
    }
  }


  saveEmployee() {

    var inputData1 = {
      empName: this.createEmployee.empName,
      empJoinDate: this.createEmployee.empJoinDate,
      empType: this.createEmployee.empType,
      empStatus: this.createEmployee.empStatus,
      empGraduate: this.createEmployee.empGraduate,
      empNetSalary: this.createEmployee.empNetSalary,
      empAccountNumber: this.createEmployee.empAccountNumber,
      empJobCode: this.createEmployee.empJobCode,
      empEntity: {
        userEmail: this.userComposite.userEmail,
        userNationalId: this.userComposite.userNationalId,
        userNpwp: this.userComposite.userNpwp,
        userAddresses: [{
          usdrId: 0,
          usdrAddress1: this.userAddressCompositeDto.usdrAddress1,
          usdrAddress2: this.userAddressCompositeDto.usdrAddress2,
          usdrCityId: this.userAddressCompositeDto.usdrCityId
        }],
        userPhones: [{
          usphPhoneNumber: this.userPhoneCompositeDto.usphPhoneNumber,
          usphPhoneType: this.userPhoneCompositeDto.usphPhoneType
        }]
      },
      grantUser: this.createEmployee.grantUser,
    }

    this.employeeService.saveEmployee(inputData1).subscribe({
      next: (res: any) => {
        console.log(res, 'respon');
        alert("Add employee success");
       
        this.getEmployee();
        this.isLoading = false;

      },
      error: (err: any) => {
        this.errors = err.error.errors;
        // this.isLoading = false;
        alert("Failed");
        console.log(err.error.errors, 'errors')

      }
    })
  }



  ngOnInit(): void {
    this.dtoptions = {
      pageLength : 5,
      lengthMenu : [5,10,15,20],
      pagingType: 'simple_numbers',
      //pageLength: 5,
      destroy:true
    };
    this.getJobType();
  this.getEmployee();
  }

}

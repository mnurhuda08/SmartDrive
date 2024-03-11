import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeAreaWorkGroup } from 'src/app/interfaces/hr/employee-area-work-group';
import { EmployeeAreaWorkGroupService } from 'src/app/services/hr/employee-area-work-group.service';
import { EmployeeComponent } from '../employee.component';
import { Arwg } from 'src/app/models/hr/arwg';
import { EmployeeService } from 'src/app/services/hr/employee.service';
import { Employee } from 'src/app/interfaces/hr/employee';
import { Eawg } from 'src/app/models/hr/eawg';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-employee-area-work-group',
  templateUrl: './employee-area-work-group.component.html',
  styleUrls: ['./employee-area-work-group.component.css']
})
export class EmployeeAreaWorkGroupComponent {
  eawgData : EmployeeAreaWorkGroup[]=[];
  eawgCreate = new Arwg();
  eawgCreate1 = new Eawg();
  isLoading: boolean = false;
  loadingTitle : string = 'Loading';
  data:  Employee[] = [];

  errors : any = [];
  //form: FormGroup;
  submitted = false;

  dtElement! : DataTableDirective;
  dtoptions: DataTables.Settings = {};
  dtTrigger : Subject<any> = new Subject<any>();

  constructor(private eawgService:EmployeeAreaWorkGroupService, private emp :EmployeeService, private router:Router){}
  
  // getEawg(){
  //   this.eawgService.getEawg().subscribe({
  //     next:(v) => this.eawgData=v,
  //     error: (e) => console.error(e),
  //     complete : (()=> console.info('completed'))
  //   })
  // }

  getEawg(){
    this.eawgService.getEawg().subscribe( res => {
      this.eawgData = res

      this.dtTrigger.next(null);
    })
  }
  
  getDataEmployee(){
    this.emp.getEmployee().subscribe({
      next:(v) => this.data=v,
      error: (e) => console.error(e),
      complete : (()=> console.info('completed'))
    })
  }
  
  deleteEmployee(event:any, id:number) {
    if(confirm('are you sure want to delete this data?')) {
      event.target.innerText = "Deleting...";
      this.eawgService.deleteEawg(id).subscribe((res:any) => {
        this.getEawg(); 
        alert(res.message);
       }
      )
    }
       
  }

  saveEawg(){

    var eawg = {
      
        arwgCityId: this.eawgCreate.arwgCityId,
        employeeAreWorkgroups: [
          {
            eawgId: this.eawgCreate1.eawgId,
            eawgEntityid: this.eawgCreate1.eawgEntityid,
            eawgArwgCode: this.eawgCreate1.eawgArwgCode
          }
        ] 
     }

     this.eawgService.saveEmployee(eawg).subscribe({
      next: (res :any) => {
        console.log(res, 'respon');
        alert("Success")
        this.getEawg();
      },
      error: (err:any) => {
        this.errors = err.error.errors;
        alert("Error")
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
      this.getEawg();
      this.getDataEmployee();
    }
}

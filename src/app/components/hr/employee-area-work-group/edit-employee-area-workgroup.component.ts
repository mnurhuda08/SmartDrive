import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeAreaWorkGroup } from 'src/app/interfaces/hr/employee-area-work-group';
import { EawgShow } from 'src/app/interfaces/hr/show/eawg-show';
import { Arwg } from 'src/app/models/hr/arwg';
import { EmployeeAreaWorkGroupService } from 'src/app/services/hr/employee-area-work-group.service';
import { EmployeeService } from 'src/app/services/hr/employee.service';

@Component({
  selector: 'app-edit-employee-area-workgroup',
  templateUrl: './edit-employee-area-workgroup.component.html',
  styleUrls: ['./edit-employee-area-workgroup.component.css']
})
export class EditEmployeeAreaWorkgroupComponent {
  eawgId! : any;
  eawg! : EawgShow;

  isLoading: boolean = false;
  loadingTitle : string = 'Loading';

  errors : any = [];

  constructor(private eawgService:EmployeeAreaWorkGroupService, private route:ActivatedRoute){

  }

  updateEawg(){
    var updateData = {
      arwgCityId: this.eawg.eawgArwgCodeNavigation.arwgCityId,
      employeeAreWorkgroups: [
        {
          eawgId: this.eawg.eawgId,
          eawgArwgCode: this.eawg.eawgArwgCode
        }
      ]
    }

    this.eawgService.updateEawg(updateData, this.eawgId).subscribe({
      next: (res:any) => {
        console.log(res);
        alert("Update has been successfull")
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
    this.eawgId = this.route.snapshot.paramMap.get('id');

    this.isLoading = true;
    this.eawgService.getEawgById(this.eawgId).subscribe((res : any)=> {
      console.log(res)
      this.eawg = res;

  
      this.isLoading=false;
    }
      ) 

    
    //alert(this.empEntityId);
  }
}

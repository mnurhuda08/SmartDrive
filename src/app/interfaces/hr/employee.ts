import { JobType } from "./job-type";
import { JobTypeShow } from "./job-type-show";

export interface Employee {
   
    empEntityid : number;
    empName : string;
    empJoinDate : Date;
    empType : string;
    empStatus : string;
    empGraduate : string;
    empNetSalary : number;
    empAccountNumber : string;
    empModifiedDate : Date;
    empJobCode : string; 
    empJobCodeNavigation : JobTypeShow;
    softDelete : string;


}

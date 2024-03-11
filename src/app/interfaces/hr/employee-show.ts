
import { JobTypeShow } from "./job-type-show";

export interface EmployeeShow {

    empEntityId : number;
    empName : string;
    empJoinDate : Date;
    empGraduate : string;
    empNetSalary : number;
    empAccountNumber : string;
    jobType : JobTypeShow;
    
}

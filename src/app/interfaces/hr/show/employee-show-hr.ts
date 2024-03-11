import { UserEmployee } from "../user-employee";
import { UserEmployeeShow } from "./user-employee-show";

export interface EmployeeShowHr {
    empName : string;
    empJoinDate : Date;
    empType : string;
    empStatus : string;
    empGraduate : string;
    empNetSalary : number;
    empAccountNumber : string;
    empJobCode : string;
    empEntity : UserEmployeeShow;
    grantUser : boolean;
    

}

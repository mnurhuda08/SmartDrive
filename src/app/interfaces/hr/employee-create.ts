import { UserEmployee } from "./user-employee";

export interface EmployeeCreate {
    empName : string;
    empJoinDate : Date;
    empType : string;
    empStatus : string;
    empGraduate : string;
    empNetSalary : number;
    empAccountNumber : string;
    empJobCode : string;
    userComposite : UserEmployee;
    grantUser : boolean;
}

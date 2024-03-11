import { UserUpdateEmployee } from "./user-update-employee";

export interface EmployeeUpdate {

    empName : string;
    empType : string;
    empStatus : string;
    empGraduate : string;
    empNetSalary : number;
    empAccountNumber : string;
    empModifiedDate : Date;
    empJobCode : string;
    userComposite : UserUpdateEmployee;
    grantUser : boolean;

}

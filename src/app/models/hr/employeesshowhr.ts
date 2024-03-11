import { EmployeeShowHr } from "src/app/interfaces/hr/show/employee-show-hr";
import { UserEmployeeShow } from "src/app/interfaces/hr/show/user-employee-show";

export class Employeesshowhr implements EmployeeShowHr {
    empName: string = "";
    empJoinDate!: Date;
    empType: string = "";
    empStatus: string = "";
    empGraduate: string= "";
    empNetSalary: number= 0
    empAccountNumber: string= "";
    empJobCode: string= "";
    empEntity: UserEmployeeShow = {} as UserEmployeeShow;
    grantUser! : boolean;
}

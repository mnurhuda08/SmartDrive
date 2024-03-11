import { EmployeeCreate } from "src/app/interfaces/hr/employee-create";
import { UserEmployee } from "src/app/interfaces/hr/user-employee";
import { UserEmployeeComposite } from "./user-employee-composite";

export class Employees {
    empName!: string;
    empJoinDate!: Date;
    empType!: string;
    empStatus!: string;
    empGraduate!: string;
    empNetSalary!: number;
    empAccountNumber!: string;
    empModifiedDate!: Date;
    empJobCode!: string;
    // userComposite!: UserEmployeeComposite;
    grantUser!: boolean;

}
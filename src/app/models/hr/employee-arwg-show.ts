import { ArwgEawg } from "src/app/interfaces/hr/arwg-eawg";
import { Employee } from "src/app/interfaces/hr/employee";
import { EmployeeAreaWorkGroup } from "src/app/interfaces/hr/employee-area-work-group";

export class EmployeeArwgShow implements EmployeeAreaWorkGroup {
    eawgId: number = 0;
    eawgEntity!: Employee;
    eawgArwgCodeNavigation!: ArwgEawg;
}

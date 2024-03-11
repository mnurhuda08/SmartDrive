import { City } from "../master/city";
import { ArwgEawg } from "./arwg-eawg";
import { CityEawg } from "./city-eawg";
import { Employee } from "./employee";

export interface EmployeeAreaWorkGroup {

    eawgId : number;
    eawgEntity : Employee
    eawgArwgCodeNavigation : ArwgEawg;
    


}

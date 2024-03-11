import { UserAddressEmployee } from "../user-address-employee";
import { UserPhoneEmployee } from "../user-phone-employee";
import { UserRoleEmployee } from "../user-role-employee";

export interface UserEmployeeShow {

    userEmail : string;
    userNationalId : string;
    userNpwp : string;
    userAddresses : UserAddressEmployee[];
    userPhones : UserPhoneEmployee[];
   

    //
}



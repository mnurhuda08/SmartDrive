import { UserAddressEmployee } from "src/app/interfaces/hr/user-address-employee";
import { UserEmployee } from "src/app/interfaces/hr/user-employee";
import { UserPhoneEmployee } from "src/app/interfaces/hr/user-phone-employee";
import { UserRoleEmployee } from "src/app/interfaces/hr/user-role-employee";
import { UserAddressComposite } from "./user-address-composite";
import { UserPhoneComposite } from "./user-phone-composite";
import { UserRoleComposite } from "./user-role-composite";

export class UserEmployeeComposite  {
    userEmail!: string;
    userNationalId!: string;
    userNpwp!: string;
    // userAddressCompositeDto!: UserAddressComposite;
    // userPhoneCompositeDto!: UserPhoneComposite;
    //userRoleCompositeDto!: UserRoleComposite;
}

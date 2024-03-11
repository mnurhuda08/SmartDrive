import { UserAddressEmployee } from "./user-address-employee";
import { UserPhoneEmployee } from "./user-phone-employee";
import { UserRoleEmployee } from "./user-role-employee";

export interface UserEmployee {

    userEmail : string;
    userNationalId : string;
    userNpwp : string;
    userAddressCompositeDto : UserAddressEmployee;
    userPhonePhoneCompositeDto : UserPhoneEmployee;
    userRoleCompositeDto : UserRoleEmployee;


}

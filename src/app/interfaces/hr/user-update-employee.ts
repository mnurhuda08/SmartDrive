import { UserPhoneComposite } from "src/app/models/hr/user-phone-composite";
import { UserAddressEmployee } from "./user-address-employee";

export interface UserUpdateEmployee {

    userEmail : string;
    userNationalId : string;
    userNpwp : string;
    userModifiedDate : Date;
    userAddressCompositeDto : UserAddressEmployee;
    userPhoneCompositeDto : UserPhoneComposite;

}

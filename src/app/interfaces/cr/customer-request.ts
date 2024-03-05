import { CustomerClaimClosed } from "./customer-claim-closed";
import { CustomerInscAsset } from "./customer-insc-asset";

export interface CustomerRequest {
    creqEntityid: number;
    creqCreateDate: string;
    creqStatus: string;
    creqType: string;
    creqModifiedDate: string;
    creqCustEntityid: number;
    creqAgenEntityid: number;
    creqCustEntity: UserDto;
    customerInscAsset: CustomerInscAsset;
    customerClaim: CustomerClaimClosed;
}

export interface UserDto {
    userFullName: string;
    userPhones: UserPhoneDto[];
    userRoles: UserRoleDto[];
}

export interface UserPhoneDto {
    usphPhoneNumber: string;
}

export interface UserRoleDto {
    usroRoleName: string;
}
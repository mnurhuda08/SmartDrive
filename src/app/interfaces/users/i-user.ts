import { IUserAddress } from './i-user-address';
import { IUserPhone } from './i-user-phone';
import { IUserRole } from './i-user-role';

export interface IUser {
  userEntityid?: number;
  userName: string;
  userPassword?: null | string;
  userFullName: string;
  userEmail: string;
  userBirthPlace: string;
  userBirthDate: string;
  userNationalId: string;
  userNpwp: string;
  userPhoto?: null | string;
  userModifiedDate?: string;
  userRoles?: IUserRole[] | null;
  userPhones?: IUserPhone[] | null;
  userAddresses?: IUserAddress[] | null;
}

export interface IUsers {
  items: IUser[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export interface IUpdateProfile {
  userEntityid?: number;
  userName?: string;
  userFullName?: string;
  userBirthPlace?: string;
  userBirthDate?: string | Date;
  userPhoto?: File | string | null | undefined;
}

export interface IRegisterUser extends IUser {
  roleName: string;
  isRoleActive: boolean;
}

export interface IForgotPassword {
  userName: string;
  userBirthPlace: string;
  userNationalId: string;
  userNpwp: string;
  newPassword: string;
  confirmNewPassword: string;
}

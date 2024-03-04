export interface IUserAccount {
  usacId?: number;
  usacAccountno: string;
  usacDebet?: number;
  usacCredit?: number;
  usacType: string;
  usacBankEntityid: number | null;
  usacFintEntityid: number | null;
  usacUserEntityid: number;
}

export interface IUserAccountFintech {
  fintEntityid: number;
  fintName: string;
  fintDesc: string;
}

export interface IUserAccountBank {
  bankEntityid: number;
  bankName: string;
  bankDesc: string;
}

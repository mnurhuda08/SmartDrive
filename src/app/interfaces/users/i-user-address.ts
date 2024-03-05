export interface IUserAddress {
  usdrId?: number;
  usdrEntityid: number;
  usdrAddress1: string;
  usdrAddress2: string;
  usdrModifiedDate?: string;
  usdrCityId: number;
  usdrCity?: IUserAddressCity;
}

export interface IUserAddressCity {
  cityId: number;
  cityProvId: number;
  cityName: string;
}

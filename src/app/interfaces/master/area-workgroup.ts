import { City } from './city';

export interface AreaWorkgroup {
  arwgCode: string;
  arwgDesc: string;
  arwgCityId: number;
  city: City;
}

import { City } from './city';

export interface AreaWorkgroup {
  code: string;
  description: string;
  cityID: number;
  city: City;
}

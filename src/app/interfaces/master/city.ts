import { Province } from './province';

export interface City {
  cityId: number;
  cityName: string;
  cityProvId: number;
  province: Province;
}

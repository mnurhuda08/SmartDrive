import { Province } from './province';

export interface City {
  cityId: number;
  cityName: string;
  provinceID: number;
  province: Province;
}

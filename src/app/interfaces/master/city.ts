import { Province } from './province';

export interface City {
  id: number;
  name: string;
  provinceID: number;
  province: Province;
}

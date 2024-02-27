import { Province } from './province';

export interface RegionPlat {
  name: string;
  description: string;
  provinceID: number;
  province: Province;
}

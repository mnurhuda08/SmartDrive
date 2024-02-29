import { Province } from './province';

export interface RegionPlat {
  regpName: string;
  regpDesc: string;
  regpProvId: number;
  province: Province;
}

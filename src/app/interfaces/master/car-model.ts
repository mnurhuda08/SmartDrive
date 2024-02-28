import { CarBrand } from './car-brand';

export interface CarModel {
  carmId: number;
  carmName: string;
  carBrandID: number;
  carBrand: CarBrand;
}

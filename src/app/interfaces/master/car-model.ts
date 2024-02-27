import { CarBrand } from './car-brand';

export interface CarModel {
  id: number;
  name: string;
  carBrandID: number;
  carBrand: CarBrand;
}

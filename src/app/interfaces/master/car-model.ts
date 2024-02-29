import { CarBrand } from './car-brand';

export interface CarModel {
  carmId: number;
  carmName: string;
  carmCabrId: number;
  carBrand: CarBrand;
}

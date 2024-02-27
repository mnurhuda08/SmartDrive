import { CarModel } from './car-model';

export interface CarSeries {
  id: number;
  name: string;
  carModelID: number;
  carModel: CarModel;
}

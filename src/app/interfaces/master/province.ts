import { Zone } from './zone';

export interface Province {
  id: number;
  name: string;
  zoneID: number;
  zone: Zone;
}

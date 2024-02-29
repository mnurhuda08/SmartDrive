import { Zone } from './zone';

export interface Province {
  provId: number;
  provName: string;
  provZonesId: number;
  zone: Zone;
}

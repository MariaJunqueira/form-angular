import { FirstHiringPart } from './first-hiring-part.model';

export class ProductContract {
  id?: number;
  hasTaxRegister?: boolean;
  parcelsTaxRegister?: number;
  hasFpd?: boolean;
  firstHiringParts?: Array<FirstHiringPart>;
}

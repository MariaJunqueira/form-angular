import { FirstHiringPart } from './first-hiring-part.model';

export class ProductContract {
  id?: number;
  hasTaxRegister?: boolean;
  parcelsTaxRegister?: number;
  hasFpd?: boolean;
  firstHiringParts?: Array<FirstHiringPart>;

  constructor(object) {
    this.id = object?.id || null;
    this.hasTaxRegister = object?.hasTaxRegister === "true" ? true : false;
    this.parcelsTaxRegister = parseInt(object?.parcelsTaxRegister) || null;
    this.hasFpd = object?.hasFpd === "true" ? true : false;
    this.firstHiringParts = this.setFirstHiringParts(object?.firstHiringParts || []) || null;
  }

  public setFirstHiringParts?(firstHiringParts: Array<FirstHiringPart>) {
    this.firstHiringParts = [];
    firstHiringParts.forEach(firstHiringPart => {
      this.firstHiringParts.push(new FirstHiringPart(firstHiringPart));
    });
    return this.firstHiringParts;
  }
}

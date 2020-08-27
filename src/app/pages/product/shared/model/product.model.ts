import { TeachingModality } from './teaching-modality.model';
import { CourseLevel } from './course-level.model';
import { ProductContract } from './product-contract.model';
import { Multiplier } from '../../../multiplier/shared/model/multiplier.model';

export class Product {
  id?: number;
  name: string;
  description: string;
  acceptRenovation?: boolean;
  acceptExpressRegistration?: boolean;
  active: boolean;
  frequencyRenovation?: number;
  courseLevel: Array<CourseLevel>;
  teachingModality: Array<TeachingModality>;
  productContract: ProductContract;
  productMultiplierMonthlyPayment: Array<Multiplier>;
  createdAt?: string;
  updatedAt?: string;

  constructor(object) {
    this.id = object.id || null;
    this.name = object.name;
    this.description = object.description;
    this.acceptRenovation = object.acceptRenovation || null;
    this.acceptExpressRegistration = object.acceptExpressRegistration || null;
    this.active = object.active;
    this.frequencyRenovation = object.frequencyRenovation || null;
    this.courseLevel = object.courseLevel.filter(element => {
      if(element.selected === true) {
        return element;
      }
    });
    this.teachingModality = object.teachingModality;
    this.productContract = object.productContract;
    this.productMultiplierMonthlyPayment = object.productMultiplierMonthlyPayment || [];
    this.createdAt = object.createdAt || '';
    this.updatedAt = object.updatedAt || '';
  }
}

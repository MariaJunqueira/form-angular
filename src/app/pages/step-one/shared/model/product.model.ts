import { TeachingModality } from './teaching-modality.model';
import { CourseLevel } from './course-level.model';
import { ProductContract } from './product-contract.model';
import { Multiplier } from '../../../multiplier/shared/model/multiplier.model';

export class Product {
  id?: number;
  name: string;
  description: string;
  acceptRenovation?: boolean;
  active: boolean;
  frequencyRenovation?: number;
  courseLevel?: Array<CourseLevel>;
  teachingModality?: Array<TeachingModality>;
  productContract?: ProductContract;
  productMultiplierMonthlyPayment?: Array<Multiplier>;
  createdAt?: string;
  updatedAt?: string;

  constructor(object) {
    this.id = object.id || null;
    this.name = object.name;
    this.description = object.description;
    this.acceptRenovation = object.acceptRenovation || null;
    this.active = object.active || true;
    this.frequencyRenovation = object.frequencyRenovation || null;
    this.courseLevel = this.setCourseLevel(object.courseLevel);
    this.teachingModality = this.setTeachingModality(object.teachingModality);
    this.productContract = new ProductContract(object.productContract);
    this.productMultiplierMonthlyPayment = this.setProductMultiplierMonthlyPayment(object.productMultiplierMonthlyPayment || []);
    this.createdAt = object.createdAt || '';
    this.updatedAt = object.updatedAt || '';
  }


  public setProductMultiplierMonthlyPayment?(multipliers: Array<Multiplier>) {
    this.productMultiplierMonthlyPayment = [];
    multipliers.forEach(multiplier => {
      this.productMultiplierMonthlyPayment.push(new Multiplier(multiplier));
    });
    return this.productMultiplierMonthlyPayment;
  }

  public setProductContract?(productContract) {
    this.productContract = new ProductContract(productContract);
  }

  public setCourseLevel?(courseLevel) {
    if(courseLevel) {
      this.courseLevel = courseLevel.filter(element => {
        let newElement = element;
        if(newElement.selected !== false) {
          delete newElement.selected;
          return newElement;
        }
      });
    }
    return this.courseLevel;
  }

  public setTeachingModality?(teachingModality) {
    if(teachingModality) {
      this.teachingModality = teachingModality.filter(element => {
        let newElement = element;
        if(newElement.selected !== false) {
          delete newElement.selected;
          return newElement;
        }
      });
    }
    return this.teachingModality;
  }
}

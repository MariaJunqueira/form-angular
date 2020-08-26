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
}

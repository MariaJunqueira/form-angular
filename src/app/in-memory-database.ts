import { CourseLevel } from './pages/step-one/shared/model/course-level.model';
import { TeachingModality } from './pages/step-one/shared/model/teaching-modality.model';
import { InMemoryDbService } from "angular-in-memory-web-api"
import { Product } from "./pages/step-one/shared/model/product.model";

export class InMemoryDataBase implements InMemoryDbService {
  createDb() {
    const products: Array<Product> = [
    {
      id: 1,
      name: "DSADASDSA",
      description: "dsadsadas",
      active: true,
      courseLevel: [
        {
          id: 1,
          name: "GRADUAÇÃO",
          active: true,
        }, {
          id: 3,
          name: "TÉCNICO",
          active: true,
        }
      ],
      teachingModality: [
        {
          id: 2,
          name: "EAD",
          active: true,
        }
      ],
      productMultiplierMonthlyPayment: [
        {
          id: 3721,
          multiplierParcels: null,
          contractInstallments: 2,
          hiringNumber: 1,
          guarantorStudentIncome: "2.00"
        }
      ],
      productContract: {
        id: 1384,
        parcelsTaxRegister: 2,
        hasTaxRegister: true,
        hasFpd: true,
        firstHiringParts: [
          {
            id: 238,
            monthlyPaymentContract: "2.00",
            parcelsContract: 2,
            parcelsTransferNextContract: 1
          }
        ]
      }
    }];

    const teachingModality: Array<TeachingModality> = [
      {
        id: 1,
        name: "Presencial",
        active: true,
      }, {
        id: 2,
        name: "EAD",
        active: true,
      }, {
        id: 3,
        name: "Semi-presencial",
        active: true,
      }
    ];

    const courseLevel: Array<CourseLevel> = [
      {
        id: 1,
        name: "Graduação",
        active: true,
      }, {
        id: 2,
        name: "Pós-graduação",
        active: true,
      }, {
        id: 3,
        name: "Técnico",
        active: true,
      }, {
        id: 4,
        name: "Intercâmbio",
        active: true
      }
    ];
    return { products, teachingModality, courseLevel }
  }
}

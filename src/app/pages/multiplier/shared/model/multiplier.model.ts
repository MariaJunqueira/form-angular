export class Multiplier {
  id?: number;
  hiringNumber: number;
  contractInstallments: number;
  multiplierParcels: number;
  guarantorStudentIncome: string;

  constructor(object) {
    this.id = object.id;
    this.hiringNumber = object.hiringNumber;
    this.contractInstallments = object.contractInstallments;
    this.multiplierParcels = object.multiplierParcels || null;
    this.guarantorStudentIncome = object.guarantorStudentIncome;
  }
}

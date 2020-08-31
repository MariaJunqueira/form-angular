export class FirstHiringPart {
  id?: number;
  monthlyPaymentContract: string;
  parcelsContract: number;
  parcelsTransferNextContract: number;

  constructor(object) {
    this.id = object.id;
    this.monthlyPaymentContract = object.monthlyPaymentContract;
    this.parcelsContract = parseInt(object.parcelsContract);
    this.parcelsTransferNextContract = parseInt(object.parcelsTransferNextContract);
  }
}

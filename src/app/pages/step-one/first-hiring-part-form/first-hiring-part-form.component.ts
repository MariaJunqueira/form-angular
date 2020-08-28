import { ProductContract } from './../shared/model/product-contract.model';
import { FirstHiringPart } from './../shared/model/first-hiring-part.model';
import { Product } from './../shared/model/product.model';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-hiring-part-form',
  templateUrl: './first-hiring-part-form.component.html',
  styleUrls: ['./first-hiring-part-form.component.sass']
})
export class FirstHiringPartFormComponent implements OnInit {

  @Input('productForm') productForm: FormGroup;
  @Input('product') product: Product;
  public contractsNumber: number = 0;
  public loading: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.contractsNumber = this.firstHiringParts.length;
    this.createForm();
  }

  createForm() {
    if (this.contractsNumber > 0) {
      this.createFirstHiringPartsForm();
    } else {
      this.loading = false;
    }
  }

  createFirstHiringPartsForm() {
    let formArray = new FormArray([]);
    if (this.productContractForm.controls['firstHiringParts']) {
      this.firstHiringParts = this.productContractForm.controls['firstHiringParts'].value;
    }
    for (let countContracts = 0; countContracts < this.contractsNumber; countContracts++) {
      formArray.push(new FormGroup({
        monthlyPaymentContract: new FormControl(this.firstHiringParts[countContracts]?.monthlyPaymentContract, [Validators.required]),
        parcelsContract: new FormControl(this.firstHiringParts[countContracts]?.parcelsContract, [Validators.required]),
        parcelsTransferNextContract: new FormControl(this.firstHiringParts[countContracts]?.parcelsTransferNextContract, [Validators.required])
      }))
    }
    this.productContractForm.setControl('firstHiringParts', formArray);
    this.loading = false;
  }

  get productContractForm() {
    return this.productForm.get('productContract') as FormGroup;
  }

  get firstHiringPartsForm() {
    if (!this.productContractForm.get('firstHiringParts')) {
      this.createFirstHiringPartsForm();
    }
    return this.productContractForm.get('firstHiringParts') as FormGroup;
  }

  get firstHiringParts(): Array<FirstHiringPart> {
    return this.product.productContract?.firstHiringParts || [];
  }

  set firstHiringParts(firstHiringPart) {
    if (!this.product.productContract) {
      this.product.productContract = new ProductContract();
    }
    this.product.productContract.firstHiringParts = firstHiringPart;
  }

  get contractsNumberSelect() {
    let selectMenu = [];
    for (let index = 1; index <= 2; index++) {
      selectMenu.push(
        {
          id: index,
          value: index + 1 + ' partes'
        }
      )
    }
    return selectMenu;
  }
}

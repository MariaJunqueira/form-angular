import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Multiplier } from "../../multiplier/shared/model/multiplier.model";

@Component({
  selector: 'app-product-multiplier-form',
  templateUrl: './product-multiplier-form.component.html',
  styleUrls: ['./product-multiplier-form.component.sass']
})
export class ProductMultiplierFormComponent implements OnInit {

  @Input('productForm') productForm: FormGroup;
  @Input('productMultiplierMonthlyPayment') productMultiplierMonthlyPayment: Array<Multiplier>;
  public loading: boolean = true;

  public disable: boolean;
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    let multiplier: Multiplier
    if(this.productMultiplierMonthlyPayment.length > 0) {
      multiplier = this.productMultiplierMonthlyPayment[0];
    }

    this.productForm.setControl('productMultiplierMonthlyPayment', new FormArray([
      new FormGroup({
        id: new FormControl(multiplier?.id || null),
        hiringNumber: new FormControl(multiplier?.hiringNumber.toString() || 1, [Validators.required]),
        contractInstallments: new FormControl(multiplier?.contractInstallments || '', [Validators.required]),
        multiplierParcels: new FormControl(multiplier?.multiplierParcels?.toString() || '', [Validators.required]),
        guarantorStudentIncome: new FormControl(multiplier?.guarantorStudentIncome?.toString() || '', [Validators.required])
      })
    ]));
    this.loading = false;
  }

  get productMultiplierForm() {
    return this.productForm.controls['productMultiplierMonthlyPayment'] as FormArray;
  }
}

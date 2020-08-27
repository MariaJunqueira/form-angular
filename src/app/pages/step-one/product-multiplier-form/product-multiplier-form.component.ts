import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Multiplier } from "../../multiplier/shared/model/multiplier.model";

@Component({
  selector: 'app-product-multiplier-form',
  templateUrl: './product-multiplier-form.component.html',
  styleUrls: ['./product-multiplier-form.component.sass']
})
export class ProductMultiplierFormComponent implements OnInit {

  @Input('productForm') productForm: FormGroup;
  @Input('productMultiplierMonthlyPayment') productMultiplierMonthlyPayment: Multiplier;
  public loading: boolean = true;

  public disable: boolean;
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.productForm.setControl('productMultiplierMonthlyPayment', new FormGroup({
      id: new FormControl(this.productMultiplierMonthlyPayment?.id || null),
      hiringNumber: new FormControl(this.productMultiplierMonthlyPayment?.hiringNumber?.toString() || '', [Validators.required]),
      contractInstallments: new FormControl(this.productMultiplierMonthlyPayment?.contractInstallments || '', [Validators.required]),
      multiplierParcels: new FormControl(this.productMultiplierMonthlyPayment?.multiplierParcels?.toString() || '', [Validators.required]),
      guarantorStudentIncome: new FormControl(this.productMultiplierMonthlyPayment?.guarantorStudentIncome?.toString() || '', [Validators.required])
    }));
    this.loading = false;
  }

  get productMultiplierForm() {
    return this.productForm.get('productMultiplierMonthlyPayment') as FormGroup;
  }
}

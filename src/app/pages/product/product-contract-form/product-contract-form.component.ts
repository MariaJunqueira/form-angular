import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from "protractor";

@Component({
  selector: 'app-product-contract-form',
  templateUrl: './product-contract-form.component.html',
  styleUrls: ['./product-contract-form.component.sass']
})
export class ProductContractFormComponent implements OnInit {

  @Input('productForm') productForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.productForm.setControl('productContract', new FormGroup({
      hasTaxRegister: new FormControl('', [Validators.required]),
    }));
  }

  public get productContractForm() {
    return this.productForm.get('productContract') as FormGroup;
  }
}

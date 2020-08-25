import { ProductContractFormComponent } from './../product-contract-form/product-contract-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass']
})
export class ProductFormComponent implements OnInit {

  #productForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit() {
    console.log(this.#productForm.value);
  }

  public get productForm () {
    return this.#productForm as FormGroup;
  }

  public set productForm (lalaland) {
    this.#productForm.setValue(lalaland);
  }

  public createForm() {
    this.#productForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
    });

    this.#productForm.valueChanges.subscribe(newVal => {
      console.log(newVal)
    })
  }
}

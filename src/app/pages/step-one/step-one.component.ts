import { Product } from './shared/model/product.model';
import { ProductService } from './shared/service/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.sass']
})
export class StepOneComponent implements OnInit {
  #productForm: FormGroup;
  public product: Product = new Product({});
  public actualProductId: number;
  public sending = false;
  public loading = true;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => this.actualProductId = params['id']);
  }

  ngOnInit(): void {
    if(typeof this.actualProductId !== "undefined") {
      this.getProduct();
    } else {
      this.createForm();
    }
  }

  onSubmit() {
    let product = new Product(this.#productForm.value);
    // this.sending = true;
    console.log(product)
    console.log(product.courseLevel)
  }

  public get productForm () {
    return this.#productForm as FormGroup;
  }
  public createForm() {
    this.#productForm = new FormGroup({});
    this.loading = false;
    this.#productForm.valueChanges.subscribe(newVal => {
      // console.log(this.#productForm)
    })
  }

  public getProduct() {
    this.productService.getById(this.actualProductId).subscribe((product: Product) => {
      this.product = product;
      this.createForm();
    });
  }
  public set productForm (lalaland) {
    this.#productForm.setValue(lalaland);
  }


}

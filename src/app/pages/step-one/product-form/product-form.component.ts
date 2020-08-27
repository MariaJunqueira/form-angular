import { ProductService } from './../shared/service/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from "../shared/model/product.model";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass']
})
export class ProductFormComponent implements OnInit {

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
    console.log(product.courseLevel)
  }

  public get productForm () {
    return this.#productForm as FormGroup;
  }

  public set productForm (lalaland) {
    this.#productForm.setValue(lalaland);
  }

  public createForm() {
    this.#productForm = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name, [Validators.required]),
      description: new FormControl(this.product.description, [Validators.required]),
    });
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
}

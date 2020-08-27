import { ProductService } from './../shared/service/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from "../shared/model/product.model";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass']
})
export class ProductFormComponent implements OnInit {

  #productForm: FormGroup;
  public product: Product;
  public actualProductId: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => this.actualProductId = params['id']);
  }

  ngOnInit(): void {
    this.createForm();
    if(typeof this.actualProductId !== "undefined") {
      this.getProduct();
    }
  }

  onSubmit() {
    let product = new Product(this.#productForm.value);
    console.log(product);
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

  public getProduct() {
    this.productService.getById(this.actualProductId).subscribe((product: Product) => {
      this.product = product;
    });
  }
}

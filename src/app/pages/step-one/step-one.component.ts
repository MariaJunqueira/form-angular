import { Product } from './shared/model/product.model';
import { ProductService } from './shared/service/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.sass']
})
export class StepOneComponent implements OnInit {
  _productForm: FormGroup;
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
    let product = new Product(this._productForm.value);
    // this.sending = true;
    console.log(product)
    console.log(product.courseLevel)
  }

  public createForm() {
    this._productForm = new FormGroup({});
    this.loading = false;
    this._productForm.valueChanges.subscribe(newVal => {
      // console.log(this._productForm)
    })
  }

  public getProduct() {
    this.productService.getById(this.actualProductId).subscribe((product: Product) => {
      this.product = product;
      this.createForm();
    });
  }

  public set productForm (lalaland) {
    this._productForm.setValue(lalaland);
  }

  public get productForm () {
    return this._productForm as FormGroup;
  }

}

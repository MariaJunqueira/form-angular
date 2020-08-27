import { ProductService } from './../shared/service/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from "../shared/model/product.model";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass']
})
export class ProductFormComponent implements OnInit {

  @Input('productForm') productForm: FormGroup;
  @Input('product') product: Product;
  public loading = true;

  constructor( ) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm() {
    console.log(this.product)
    this.productForm.setControl('id', new FormControl(this.product?.id || null));
    this.productForm.setControl('name', new FormControl(this.product?.name || ''));
    this.productForm.setControl('description', new FormControl(this.product?.description || ''));
    this.loading = false;
  }
}

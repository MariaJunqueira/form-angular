import { Product } from './shared/model/product.model';
import { ProductService } from './shared/service/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';

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

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService
  ) {
    this.route.params.subscribe((params) => this.actualProductId = params['id']);
    this.loadingService.increaseLoader();
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
    this.productService.create(product).pipe()
    .subscribe((response) => {
      // console.log(response)
    })
  }

  public createForm() {
    this._productForm = new FormGroup({});
    this._productForm.valueChanges.subscribe(newVal => {
      // console.log(newVal)
    })
    this.loadingService.decreaseLoader();
  }

  public getProduct() {
    this.productService.getById(this.actualProductId).subscribe((product: Product) => {
      this.product = product;
      this.createForm();
    },
    (error => {
      if (error.status === 404) {
        this.loadingService.decreaseLoader();
        this.router.navigate(['/product']);
      }
    }))
  }

  public set productForm(value) {
    this._productForm.setValue(value);
  }

  public get productForm() {
    return this._productForm as FormGroup;
  }

}

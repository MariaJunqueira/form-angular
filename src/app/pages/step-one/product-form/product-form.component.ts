import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ProductService } from './../shared/service/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Product } from "../shared/model/product.model";
import { LoadingService } from 'src/app/shared/components/loading/loading.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass']
})
export class ProductFormComponent implements OnInit {

  @Input('productForm') productForm: FormGroup;
  @Input('product') product: Product;
  public loading = true;

  constructor(
    private loadingService: LoadingService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.loadingService.increaseLoader();
  }

  public createForm() {
    this.productForm.setControl('id', new FormControl(this.product?.id || null));
    this.productForm.setControl('name', new FormControl(this.product?.name || '', { validators: [Validators.required, this.validateSpaceOnly], asyncValidators: [this.existingNameValidator()], updateOn: "blur"}));
    this.productForm.setControl('description', new FormControl(this.product?.description || ''));
    this.loading = false;
    this.loadingService.decreaseLoader()
  }

  validateSpaceOnly(control: AbstractControl): { [key: string]: boolean } | null {
    if (!control.value.replace(/\s/g, '').length) {
      return { "spaceOnly": true }
    }

    return null
  }

  existingNameValidator(): AsyncValidatorFn {
    return (
      control: AbstractControl
    ):
      | Promise<{ [key: string]: any } | null>
      | Observable<{ [key: string]: any } | null> => {
      if (!control.value) {
        return of(null);
      } else {
        return this.productService.getByName({ name: control.value }).pipe(
          map((product: any) => {
            return product.content?.id.toString() !== this.product?.id?.toString() ? { "nameExists": { value: true } } : null
          }),
          catchError(() => {
            return of (null);
          })
        );
      }
    };
  }
}

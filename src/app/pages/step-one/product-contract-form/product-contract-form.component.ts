import { DisableControlDirective } from './../shared/directive/disable-control.directive';
import { ProductContract } from './../shared/model/product-contract.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output } from '@angular/core';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';

@Component({
  selector: 'app-product-contract-form',
  templateUrl: './product-contract-form.component.html',
  styleUrls: ['./product-contract-form.component.sass']
})
export class ProductContractFormComponent implements OnInit {

  @Input('productForm') productForm: FormGroup;
  @Input('productContract') productContract: ProductContract;
  public disable: boolean;
  public loading: boolean = true;

  constructor(
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.loadingService.increaseLoader();
  }

  createForm() {
    this.productForm.setControl('productContract', new FormGroup({
      id: new FormControl(this.productContract?.id || null),
      hasTaxRegister: new FormControl(this.productContract?.hasTaxRegister?.toString() || '', [Validators.required]),
      parcelsTaxRegister: new FormControl(this.productContract?.parcelsTaxRegister || '', [Validators.required]),
      hasFpd: new FormControl(this.productContract?.hasFpd?.toString() || '', [Validators.required]),
    }));
    this.disable = !this.productContract?.hasTaxRegister;
    this.loading = false;
    this.loadingService.decreaseLoader();
  }

  public get productContractForm() {
    return this.productForm.get('productContract') as FormGroup;
  }

  public disableField(status: boolean) {
    this.disable = status;
  }
}

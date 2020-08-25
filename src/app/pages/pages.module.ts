import { ProductModule } from './product/product.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductModule
  ],
  exports: [
    ProductModule
  ]
})
export class PagesModule { }

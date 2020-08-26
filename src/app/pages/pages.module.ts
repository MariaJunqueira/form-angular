import { ComponentsModule } from './../shared/components/components.module';
import { ProductModule } from './product/product.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductModule,
    ComponentsModule
  ],
  exports: [
    ProductModule
  ]
})
export class PagesModule { }

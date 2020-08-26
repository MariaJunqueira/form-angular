import { RouterModule } from '@angular/router';
import { ComponentsModule } from './../shared/components/components.module';
import { ProductModule } from './product/product.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    ProductModule,
    ComponentsModule,
    RouterModule
  ],
  exports: [
    ProductModule
  ]
})
export class PagesModule { }

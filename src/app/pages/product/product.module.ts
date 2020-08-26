import { CourseLevelFormComponent } from './course-level-form/course-level-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductContractFormComponent } from './product-contract-form/product-contract-form.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    ProductContractFormComponent,
    CourseLevelFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductFormComponent,
    ProductContractFormComponent,
    CourseLevelFormComponent
  ]
})
export class ProductModule { }

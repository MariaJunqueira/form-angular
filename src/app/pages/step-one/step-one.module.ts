import { DisableControlDirective } from './shared/directive/disable-control.directive';
import { ComponentsModule } from '../../shared/components/components.module';
import { CourseLevelFormComponent } from './course-level-form/course-level-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductContractFormComponent } from './product-contract-form/product-contract-form.component';
import { TeachingModalityFormComponent } from './teaching-modality-form/teaching-modality-form.component';
import { FirstHiringPartFormComponent } from './first-hiring-part-form/first-hiring-part-form.component';
import { ProductMultiplierFormComponent } from './product-multiplier-form/product-multiplier-form.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    ProductContractFormComponent,
    CourseLevelFormComponent,
    TeachingModalityFormComponent,
    DisableControlDirective,
    FirstHiringPartFormComponent,
    ProductMultiplierFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  exports: [
    ProductFormComponent,
    ProductContractFormComponent,
    CourseLevelFormComponent,
    DisableControlDirective
  ]
})
export class StepOneModule { }

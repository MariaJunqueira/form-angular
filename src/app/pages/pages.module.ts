import { RouterModule } from '@angular/router';
import { ComponentsModule } from './../shared/components/components.module';
import { StepOneModule } from './step-one/step-one.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    StepOneModule,
    ComponentsModule,
    RouterModule
  ],
  exports: [
    StepOneModule
  ]
})
export class PagesModule { }

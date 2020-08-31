import { StepOneComponent } from './pages/step-one/step-one.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from "./pages/pages.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "product/:id",
        component: StepOneComponent
      },
      {
        path: "product",
        component: StepOneComponent
      }
    ]
  },
  {
    path: "**",
    component: PagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

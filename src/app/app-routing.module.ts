import { AppComponent } from './app.component';
import { ProductFormComponent } from './pages/product/product-form/product-form.component';
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
        component: ProductFormComponent
      },
      {
        path: "product",
        component: ProductFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

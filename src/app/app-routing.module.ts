import { AuthenticationGuard } from './authentication/shared/service/authenticator.guard';
import { LoginComponent } from './authentication/login/login.component';
import { StepOneComponent } from './pages/step-one/step-one.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from "./pages/pages.component";
import { AuthenticationComponent } from "./authentication/authentication.component";

const routes: Routes = [
  {
    path: "login",
    component: AuthenticationComponent,
    children: [
      {
        path: "",
        component: LoginComponent
      }
    ]
  }, {
    path: "",
    component: PagesComponent,
    canActivate: [AuthenticationGuard],
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
  }, {
    path: "**",
    component: PagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

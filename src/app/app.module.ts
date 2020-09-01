import { HttpsRequestInterceptor } from './shared/interceptor/http-request-interceptor.module';
import { InMemoryDataBase } from './in-memory-database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesModule } from './pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { HttpClientModule } from "@angular/common/http";
import { AuthenticationModule } from "./authentication/authentication.module";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PagesModule,
    AuthenticationModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataBase, {delay: 5000}),
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpsRequestInterceptor,
    multi: true,
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }

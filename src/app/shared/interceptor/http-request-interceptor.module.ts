import { AuthenticationService } from './../../authentication/shared/service/authentication.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable, NgModule } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap(() => { },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 403) {
            this.authenticationService.logout();
          }
        }
      }));
  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    },
  ],
})

export class Interceptor { }

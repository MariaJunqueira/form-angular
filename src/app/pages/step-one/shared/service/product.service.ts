import { Product } from './../model/product.model';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";
import { environment as env } from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiPath: string = '/api/v2/products';

  constructor(private http: HttpClient) {}

  public getById(id: number) {
    return this.http.get(env.url + this.apiPath + '/' + id).pipe(
      map(data => data as Product),
      catchError(error => this.handleError(error))
    )
  }

  public create(product: Product) {
    return this.http.post(env.url + this.apiPath, product).pipe(catchError(this.handleError));
  }

  private handleError(error) {
    console.warn(error);
    return throwError(error);
  }
}

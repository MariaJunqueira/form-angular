import { Product } from './../model/product.model';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiPath: string = '/api/products';

  constructor(private http: HttpClient) {}

  public getById(id: number) {
    return this.http.get(this.apiPath + '/' + id).pipe(
      map(data => data as Product),
      catchError(this.handleError)
    )
  }

  public create(product: Product) {
    return this.http.post(this.apiPath, product).pipe(catchError(this.handleError));
  }

  private handleError(error) {
    console.warn(error);
    return throwError('Deu ruim' + error.message);
  }
}

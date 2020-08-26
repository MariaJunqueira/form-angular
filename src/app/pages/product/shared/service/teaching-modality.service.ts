import { TeachingModality } from './../model/teaching-modality.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError, } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TeachingModalityService {
  private apiPath: string = 'api/teachingModality';

  constructor(private http: HttpClient) { }

  public getAll () {
    return this.http.get(this.apiPath).pipe(
      map(this.jsonDataToTeachingModality),
      catchError(this.handleError)
    );
  }

  public jsonDataToTeachingModality(jsonData: Array<any>): TeachingModality[] {
    const teachingModality: Array<TeachingModality> = [];
    jsonData.forEach((element: TeachingModality) => {
      teachingModality.push(element);
    });
    return teachingModality;
  }

  public handleError(error) {
    console.warn('Deu ruim' + error.message);
    return throwError(error);
  }
}

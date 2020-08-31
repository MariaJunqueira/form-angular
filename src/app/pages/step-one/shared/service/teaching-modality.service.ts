import { TeachingModality } from './../model/teaching-modality.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError, } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment as env } from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TeachingModalityService {
  private apiPath: string = '/api/teaching/modalities';

  constructor(private http: HttpClient) { }

  public getAll () {
    return this.http.get(env.url + this.apiPath).pipe(
      map(this.jsonDataToTeachingModality),
      catchError(this.handleError)
    );
  }

  public jsonDataToTeachingModality(jsonData): TeachingModality[] {
    jsonData = jsonData.content;
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

import { CourseLevel } from './../model/course-level.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError, } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment as env } from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CourseLevelService {
  private apiPath: string = '/api/course/levels';

  constructor(private http: HttpClient) { }

  public getAll () {
    return this.http.get(env.url + this.apiPath).pipe(
      map(this.jsonDataToCourseLevel),
      catchError(this.handleError)
    );
  }

  public jsonDataToCourseLevel(jsonData): CourseLevel[] {
    jsonData = jsonData.content;
    const courseLevels: Array<CourseLevel> = [];
    jsonData.forEach((element: CourseLevel) => {
      courseLevels.push(element);
    });
    return courseLevels;
  }

  public handleError(error) {
    console.warn('Deu ruim' + error.message);
    return throwError(error);
  }
}

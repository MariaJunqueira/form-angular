import { CourseLevel } from './../model/course-level.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError, } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CourseLevelService {
  private apiPath: string = 'api/courseLevel';

  constructor(private http: HttpClient) { }

  public getAll () {
    return this.http.get(this.apiPath).pipe(
      map(this.jsonDataToCourseLevel),
      catchError(this.handleError)
    );
  }

  public jsonDataToCourseLevel(jsonData: Array<any>): CourseLevel[] {
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

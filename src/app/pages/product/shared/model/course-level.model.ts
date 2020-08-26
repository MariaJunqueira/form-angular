export class CourseLevel {
  id?: number;
  name: string;
  active: boolean;

  constructor(courseLevel: CourseLevel) {
    this.id = courseLevel.id;
    this.name = courseLevel.name;
    this.active = courseLevel.active;
  }
}

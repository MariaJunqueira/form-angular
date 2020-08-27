export class CourseLevel {
  id?: number;
  name: string;
  active: boolean;
  selected?: boolean;

  constructor(courseLevel: CourseLevel) {
    this.id = courseLevel.id;
    this.name = courseLevel.name;
    this.active = courseLevel.active;
  }
}

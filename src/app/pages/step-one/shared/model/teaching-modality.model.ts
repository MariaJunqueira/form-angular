export class TeachingModality {
  id?: number;
  name: string;
  active: boolean;
  selected?: boolean;

  constructor(teachingModality: TeachingModality) {
    this.id = teachingModality.id;
    this.name = teachingModality.name;
    this.active = teachingModality.active;
  }
}

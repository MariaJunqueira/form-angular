import { CourseLevelService } from './../shared/service/course-level.service';
import { FormGroup, Validators, FormArray, ValidatorFn, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { TeachingModality } from "../shared/model/teaching-modality.model";
import { CourseLevel } from "../shared/model/course-level.model";

@Component({
  selector: 'app-course-level-form',
  templateUrl: './course-level-form.component.html',
  styleUrls: ['./course-level-form.component.sass']
})
export class CourseLevelFormComponent implements OnInit {

  @Input('productForm') productForm: FormGroup;
  public courseLevels: Array<TeachingModality>;
  public loading: boolean = true;

  constructor(private courseLevelService: CourseLevelService) { }

  ngOnInit(): void {
    this.getCourseLevels();
  }

  public get courseLevelForm() {
    return this.productForm.controls['courseLevel'] as FormArray;
  }

  minSelectedCheckboxes(min = 1) {
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        .map(control => control.value)
        .reduce((prev, next) => next ? prev + next : prev, 0);
      return totalSelected >= min ? null : { required: true };
    };
    return validator;
  }

  public getCourseLevels() {
    this.courseLevelService.getAll().subscribe(
      (courseLevels: Array<TeachingModality>) => {
        this.createForm(courseLevels);
      });
  }

  createForm(courseLevels: Array<CourseLevel>) {
    let courseLevelForm: FormArray = new FormArray([]);

    courseLevels.forEach((courseLevel) => {
      courseLevelForm.push( new FormGroup({
          id: new FormControl(courseLevel.id || null),
          name: new FormControl(courseLevel.name || ''),
          selected: new FormControl(false)
        })
      )
    });

    this.productForm.setControl('courseLevel', courseLevelForm);
    this.loading = false;
  }
}

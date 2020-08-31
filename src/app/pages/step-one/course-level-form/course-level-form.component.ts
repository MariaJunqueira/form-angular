import { CourseLevelService } from './../shared/service/course-level.service';
import { FormGroup, Validators, FormArray, ValidatorFn, FormControl, AbstractControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { CourseLevel } from "../shared/model/course-level.model";
import { LoadingService } from 'src/app/shared/components/loading/loading.service';

@Component({
  selector: 'app-course-level-form',
  templateUrl: './course-level-form.component.html',
  styleUrls: ['./course-level-form.component.sass']
})
export class CourseLevelFormComponent implements OnInit {

  @Input('productForm') productForm: FormGroup;
  @Input('courseLevels') courseLevels: Array<CourseLevel>;

  public loading: boolean = true;

  constructor(
    private courseLevelService: CourseLevelService,
    private loadingService: LoadingService
    ) { }

  ngOnInit(): void {
    this.getCourseLevels();
    this.loadingService.increaseLoader();
  }

  public get courseLevelForm() {
    return this.productForm.controls['courseLevel'] as FormArray;
  }

  minSelectedCheckboxes(min = 1) {
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        .map(control => control.get('selected').value)
        .reduce((prev, next) => next ? prev + next : prev, 0);
      return totalSelected >= min ? null : { required: true };
    };
    return validator;
  }

  public getCourseLevels() {
    this.courseLevelService.getAll().subscribe(
      (courseLevels: Array<CourseLevel>) => {
        this.createForm(courseLevels);
      });
  }

  createForm(courseLevels: Array<CourseLevel>) {
    let courseLevelForm: FormArray = new FormArray([]);

    courseLevels.forEach((courseLevel) => {
      let selected = this.checkCourseLevelSelected(courseLevel);
      courseLevelForm.push( new FormGroup({
          id: new FormControl(courseLevel.id || null),
          name: new FormControl(courseLevel.name || ''),
          active: new FormControl(courseLevel.active || true),
          selected: new FormControl(selected)
        })
      )
    });
    courseLevelForm.setValidators([this.minSelectedCheckboxes()]);
    this.productForm.setControl('courseLevel', courseLevelForm);
    this.loading = false;
    this.loadingService.decreaseLoader()
  }

  checkCourseLevelSelected(courseLevel: CourseLevel) {
    let selected = false;
    if(!this.courseLevels) {
      return selected;
    }
    let courseLevelSelected = this.courseLevels.filter((courseLevelSelected) => {
      return courseLevelSelected.id === courseLevel.id;
    });
    if(courseLevelSelected.length > 0) {
      selected = true;
    }
    return selected;
  }

  markAsTouched(control: AbstractControl) {
    control.markAsTouched();
  }
}

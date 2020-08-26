import { FormGroup, Validators, FormArray, ValidatorFn, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-level-form',
  templateUrl: './course-level-form.component.html',
  styleUrls: ['./course-level-form.component.sass']
})
export class CourseLevelFormComponent implements OnInit {

  @Input('productForm') productForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.productForm.setControl('courseLevel', new FormArray([
      new FormGroup(
        {
          id: new FormControl(1),
          name: new FormControl('name')
        }
      ), new FormGroup(
        {
          id: new FormControl(2),
          name: new FormControl('name2')
        }
      ), new FormGroup(
        {
          id: new FormControl(3),
          name: new FormControl('name3')
        }
      )
    ]));
  }

  public get courseLevelForm() {
    return this.productForm.get('courseLevel') as FormArray;
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
}

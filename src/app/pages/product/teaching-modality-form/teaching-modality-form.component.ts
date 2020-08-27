import { TeachingModalityService } from './../shared/service/teaching-modality.service';
import { FormGroup, FormArray, ValidatorFn, FormControl, AbstractControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { TeachingModality } from "../shared/model/teaching-modality.model";

@Component({
  selector: 'app-teaching-modality-form',
  templateUrl: './teaching-modality-form.component.html',
  styleUrls: ['./teaching-modality-form.component.sass']
})
export class TeachingModalityFormComponent implements OnInit {

  @Input('productForm') productForm: FormGroup;
  @Input('teachingModalities') teachingModalities: Array<TeachingModality>;

  public loading: boolean = true;

  constructor(private teachingModalityService: TeachingModalityService) { }

  ngOnInit(): void {
    this.getTeachingModalitys();
  }

  public get teachingModalityForm() {
    return this.productForm.controls['teachingModality'] as FormArray;
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

  public getTeachingModalitys() {
    this.teachingModalityService.getAll().subscribe(
      (teachingModalities: Array<TeachingModality>) => {
        this.createForm(teachingModalities);
      });
  }

  createForm(teachingModalities: Array<TeachingModality>) {
    let teachingModalityForm: FormArray = new FormArray([]);

    teachingModalities.forEach((teachingModality) => {
      let selected = this.checkTeachingModalitySelected(teachingModality);
      teachingModalityForm.push( new FormGroup({
          id: new FormControl(teachingModality.id || null),
          name: new FormControl(teachingModality.name || ''),
          active: new FormControl(teachingModality.active || true),
          selected: new FormControl(selected)
        })
      )
    });
    teachingModalityForm.setValidators([this.minSelectedCheckboxes()]);
    this.productForm.setControl('teachingModality', teachingModalityForm);
    this.loading = false;
  }

  checkTeachingModalitySelected(teachingModality: TeachingModality) {
    let selected = false;
    if(!this.teachingModalities) {
      return selected;
    }
    let teachingModalitySelected = this.teachingModalities.filter((teachingModalitySelected) => {
      return teachingModalitySelected.id === teachingModality.id;
    });
    if(teachingModalitySelected.length > 0) {
      selected = true;
    }
    return selected;
  }

  markAsTouched(control: AbstractControl) {
    control.markAsTouched();
  }
}

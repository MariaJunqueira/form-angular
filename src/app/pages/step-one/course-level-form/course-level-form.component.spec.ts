import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLevelFormComponent } from './course-level-form.component';
import { FormGroup } from "@angular/forms";

describe('CourseLevelFormComponent', () => {
  let component: CourseLevelFormComponent;
  let fixture: ComponentFixture<CourseLevelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLevelFormComponent ],
      imports: [ HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLevelFormComponent);
    component = fixture.componentInstance;
    component.productForm = new FormGroup({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

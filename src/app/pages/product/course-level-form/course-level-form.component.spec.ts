import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLevelFormComponent } from './course-level-form.component';

describe('CourseLevelFormComponent', () => {
  let component: CourseLevelFormComponent;
  let fixture: ComponentFixture<CourseLevelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLevelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLevelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

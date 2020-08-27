import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingModalityFormComponent } from './teaching-modality-form.component';

describe('TeachingModalityFormComponent', () => {
  let component: TeachingModalityFormComponent;
  let fixture: ComponentFixture<TeachingModalityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingModalityFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingModalityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

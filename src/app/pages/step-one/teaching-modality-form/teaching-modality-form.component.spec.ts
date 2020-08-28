import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingModalityFormComponent } from './teaching-modality-form.component';
import { FormGroup } from "@angular/forms";

describe('TeachingModalityFormComponent', () => {
  let component: TeachingModalityFormComponent;
  let fixture: ComponentFixture<TeachingModalityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingModalityFormComponent ],
      imports: [ HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingModalityFormComponent);
    component = fixture.componentInstance;
    component.productForm = new FormGroup({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

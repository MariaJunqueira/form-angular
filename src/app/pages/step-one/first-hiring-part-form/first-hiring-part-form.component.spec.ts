import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstHiringPartFormComponent } from './first-hiring-part-form.component';

describe('FirstHiringPartFormComponent', () => {
  let component: FirstHiringPartFormComponent;
  let fixture: ComponentFixture<FirstHiringPartFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstHiringPartFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstHiringPartFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

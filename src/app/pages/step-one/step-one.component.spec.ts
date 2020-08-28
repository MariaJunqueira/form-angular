import { RouterTestingModule } from '@angular/router/testing';
import { ProductFormComponent } from './product-form/product-form.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StepOneComponent } from './step-one.component';

describe('StepOneComponent', () => {
  let component: StepOneComponent;
  let fixture: ComponentFixture<StepOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepOneComponent ],
      imports: [ HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        // ProductFormComponent,
        // ActivatedRoute
      ], imports: [
        RouterTestingModule
      ]
    });
    fixture = TestBed.createComponent(StepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // TestBed.inject(ProductFormComponent);
  // TestBed.inject(ActivatedRoute);

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

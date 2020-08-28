import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMultiplierFormComponent } from './product-multiplier-form.component';
import { FormGroup } from "@angular/forms";

describe('ProductMultiplierFormComponent', () => {
  let component: ProductMultiplierFormComponent;
  let fixture: ComponentFixture<ProductMultiplierFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMultiplierFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMultiplierFormComponent);
    component = fixture.componentInstance;
    component.productForm = new FormGroup({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});

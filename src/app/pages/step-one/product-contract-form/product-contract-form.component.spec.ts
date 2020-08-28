import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductContractFormComponent } from './product-contract-form.component';
import { FormGroup } from "@angular/forms";

describe('ProductContractFormComponent', () => {
  let component: ProductContractFormComponent;
  let fixture: ComponentFixture<ProductContractFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductContractFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductContractFormComponent);
    component = fixture.componentInstance;
    component.productForm = new FormGroup({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

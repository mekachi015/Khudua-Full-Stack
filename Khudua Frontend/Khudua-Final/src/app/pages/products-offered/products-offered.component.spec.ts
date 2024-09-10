import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOfferedComponent } from './products-offered.component';

describe('ProductsOfferedComponent', () => {
  let component: ProductsOfferedComponent;
  let fixture: ComponentFixture<ProductsOfferedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsOfferedComponent]
    });
    fixture = TestBed.createComponent(ProductsOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

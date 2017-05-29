import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAdmComponent } from './products-adm.component';

describe('ProductsAdmComponent', () => {
  let component: ProductsAdmComponent;
  let fixture: ComponentFixture<ProductsAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

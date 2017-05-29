import { TestBed, inject } from '@angular/core/testing';

import { ProductsAdmService } from './products-adm.service';

describe('ProductsAdmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsAdmService]
    });
  });

  it('should ...', inject([ProductsAdmService], (service: ProductsAdmService) => {
    expect(service).toBeTruthy();
  }));
});

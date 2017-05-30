import { TestBed, inject } from '@angular/core/testing';

import { OrdersDetailsService } from './orders-details.service';

describe('OrdersDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersDetailsService]
    });
  });

  it('should ...', inject([OrdersDetailsService], (service: OrdersDetailsService) => {
    expect(service).toBeTruthy();
  }));
});

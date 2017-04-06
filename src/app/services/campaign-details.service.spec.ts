import { TestBed, inject } from '@angular/core/testing';

import { CampaignDetailsService } from './campaign-details.service';

describe('CampaignDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignDetailsService]
    });
  });

  it('should ...', inject([CampaignDetailsService], (service: CampaignDetailsService) => {
    expect(service).toBeTruthy();
  }));
});

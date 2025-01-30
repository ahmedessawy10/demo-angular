import { TestBed } from '@angular/core/testing';

import { StatiCDataService } from './stati-cdata.service';

describe('StatiCDataService', () => {
  let service: StatiCDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatiCDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

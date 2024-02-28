import { TestBed } from '@angular/core/testing';

import { ServiceordersService } from './serviceorders.service';

describe('ServiceordersService', () => {
  let service: ServiceordersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceordersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

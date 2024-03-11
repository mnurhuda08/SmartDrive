import { TestBed } from '@angular/core/testing';

import { EmployeeAreaWorkGroupService } from './employee-area-work-group.service';

describe('EmployeeAreaWorkGroupService', () => {
  let service: EmployeeAreaWorkGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeAreaWorkGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

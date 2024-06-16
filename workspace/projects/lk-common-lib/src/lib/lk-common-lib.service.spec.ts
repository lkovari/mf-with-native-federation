import { TestBed } from '@angular/core/testing';

import { LkCommonLibService } from './lk-common-lib.service';

describe('LkCommonLibService', () => {
  let service: LkCommonLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LkCommonLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

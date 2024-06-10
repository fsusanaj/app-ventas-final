import { TestBed } from '@angular/core/testing';

import { LiginService } from './ligin.service';

describe('LiginService', () => {
  let service: LiginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

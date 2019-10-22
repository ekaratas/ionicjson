import { TestBed } from '@angular/core/testing';

import { AracService } from './arac.service';

describe('AracService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AracService = TestBed.get(AracService);
    expect(service).toBeTruthy();
  });
});

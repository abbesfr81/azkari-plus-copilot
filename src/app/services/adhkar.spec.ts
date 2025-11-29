import { TestBed } from '@angular/core/testing';

import { Adhkar } from './adhkar';

describe('Adhkar', () => {
  let service: Adhkar;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Adhkar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

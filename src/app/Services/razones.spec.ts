import { TestBed } from '@angular/core/testing';

import { Razones } from './razones';

describe('Razones', () => {
  let service: Razones;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Razones);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

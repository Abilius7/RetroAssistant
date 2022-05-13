import { TestBed } from '@angular/core/testing';

import { RodadasService } from './rodadas.service';

describe('RodadasService', () => {
  let service: RodadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RodadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

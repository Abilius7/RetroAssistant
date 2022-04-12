import { TestBed } from '@angular/core/testing';

import { DatosArduinoService } from './datos-arduino.service';

describe('DatosArduinoService', () => {
  let service: DatosArduinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosArduinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

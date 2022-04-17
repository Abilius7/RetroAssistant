import { TestBed } from '@angular/core/testing';

import { ObtenerProductosService } from './obtener-productos.service';

describe('ObtenerProductosService', () => {
  let service: ObtenerProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

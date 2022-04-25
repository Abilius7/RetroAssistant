import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarDatosProductosComponent } from './cambiar-datos-productos.component';

describe('CambiarDatosProductosComponent', () => {
  let component: CambiarDatosProductosComponent;
  let fixture: ComponentFixture<CambiarDatosProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarDatosProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarDatosProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

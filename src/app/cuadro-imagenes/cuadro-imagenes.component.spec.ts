import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroImagenesComponent } from './cuadro-imagenes.component';

describe('CuadroImagenesComponent', () => {
  let component: CuadroImagenesComponent;
  let fixture: ComponentFixture<CuadroImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroImagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadroImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

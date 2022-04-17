import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesUsuarioComponent } from './opciones-usuario.component';

describe('OpcionesUsuarioComponent', () => {
  let component: OpcionesUsuarioComponent;
  let fixture: ComponentFixture<OpcionesUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionesUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

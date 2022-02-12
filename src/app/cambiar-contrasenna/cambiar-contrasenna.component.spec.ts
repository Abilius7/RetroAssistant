import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarContrasennaComponent } from './cambiar-contrasenna.component';

describe('CambiarContrasennaComponent', () => {
  let component: CambiarContrasennaComponent;
  let fixture: ComponentFixture<CambiarContrasennaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarContrasennaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarContrasennaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

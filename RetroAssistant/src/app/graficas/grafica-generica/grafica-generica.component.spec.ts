import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaGenericaComponent } from './grafica-generica.component';

describe('GraficaGenericaComponent', () => {
  let component: GraficaGenericaComponent;
  let fixture: ComponentFixture<GraficaGenericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaGenericaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaGenericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

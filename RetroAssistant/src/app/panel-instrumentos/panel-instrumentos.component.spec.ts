import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelInstrumentosComponent } from './panel-instrumentos.component';

describe('PanelInstrumentosComponent', () => {
  let component: PanelInstrumentosComponent;
  let fixture: ComponentFixture<PanelInstrumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelInstrumentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelInstrumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

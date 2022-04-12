import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelControlAdministradorComponent } from './panel-control-administrador.component';

describe('PanelControlAdministradorComponent', () => {
  let component: PanelControlAdministradorComponent;
  let fixture: ComponentFixture<PanelControlAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelControlAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelControlAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

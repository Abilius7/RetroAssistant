import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnadirProductoComponent } from './annadir-producto.component';

describe('AnnadirProductoComponent', () => {
  let component: AnnadirProductoComponent;
  let fixture: ComponentFixture<AnnadirProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnadirProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnadirProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

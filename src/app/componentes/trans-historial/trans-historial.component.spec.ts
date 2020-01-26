import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransHistorialComponent } from './trans-historial.component';

describe('TransHistorialComponent', () => {
  let component: TransHistorialComponent;
  let fixture: ComponentFixture<TransHistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransHistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

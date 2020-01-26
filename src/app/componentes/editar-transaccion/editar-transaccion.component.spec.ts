import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTransaccionComponent } from './editar-transaccion.component';

describe('EditarTransaccionComponent', () => {
  let component: EditarTransaccionComponent;
  let fixture: ComponentFixture<EditarTransaccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTransaccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

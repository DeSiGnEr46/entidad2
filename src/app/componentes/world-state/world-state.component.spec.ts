import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldStateComponent } from './world-state.component';

describe('WorldStateComponent', () => {
  let component: WorldStateComponent;
  let fixture: ComponentFixture<WorldStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

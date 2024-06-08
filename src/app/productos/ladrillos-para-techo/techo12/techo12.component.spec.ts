import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Techo12Component } from './techo12.component';

describe('Techo12Component', () => {
  let component: Techo12Component;
  let fixture: ComponentFixture<Techo12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Techo12Component]
    });
    fixture = TestBed.createComponent(Techo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

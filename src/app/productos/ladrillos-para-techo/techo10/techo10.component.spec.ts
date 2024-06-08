import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Techo10Component } from './techo10.component';

describe('Techo10Component', () => {
  let component: Techo10Component;
  let fixture: ComponentFixture<Techo10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Techo10Component]
    });
    fixture = TestBed.createComponent(Techo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadrillosParaMuroComponent } from './ladrillos-para-muro.component';

describe('LadrillosParaMuroComponent', () => {
  let component: LadrillosParaMuroComponent;
  let fixture: ComponentFixture<LadrillosParaMuroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LadrillosParaMuroComponent]
    });
    fixture = TestBed.createComponent(LadrillosParaMuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

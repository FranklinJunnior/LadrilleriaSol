import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadrillosParaTechoComponent } from './ladrillos-para-techo.component';

describe('LadrillosParaTechoComponent', () => {
  let component: LadrillosParaTechoComponent;
  let fixture: ComponentFixture<LadrillosParaTechoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LadrillosParaTechoComponent]
    });
    fixture = TestBed.createComponent(LadrillosParaTechoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

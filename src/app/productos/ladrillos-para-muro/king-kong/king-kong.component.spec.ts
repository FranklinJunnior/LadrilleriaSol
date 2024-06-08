import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingKongComponent } from './king-kong.component';

describe('KingKongComponent', () => {
  let component: KingKongComponent;
  let fixture: ComponentFixture<KingKongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KingKongComponent]
    });
    fixture = TestBed.createComponent(KingKongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

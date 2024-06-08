import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanderetaComponent } from './pandereta.component';

describe('PanderetaComponent', () => {
  let component: PanderetaComponent;
  let fixture: ComponentFixture<PanderetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanderetaComponent]
    });
    fixture = TestBed.createComponent(PanderetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotoComponent } from './goto.component';

describe('GotoComponent', () => {
  let component: GotoComponent;
  let fixture: ComponentFixture<GotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GotoComponent]
    });
    fixture = TestBed.createComponent(GotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

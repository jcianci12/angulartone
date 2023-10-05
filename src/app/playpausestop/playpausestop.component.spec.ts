import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaypausestopComponent } from './playpausestop.component';

describe('PlaypausestopComponent', () => {
  let component: PlaypausestopComponent;
  let fixture: ComponentFixture<PlaypausestopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaypausestopComponent]
    });
    fixture = TestBed.createComponent(PlaypausestopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

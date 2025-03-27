import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalCompComponent } from './signal-comp.component';

describe('SignalCompComponent', () => {
  let component: SignalCompComponent;
  let fixture: ComponentFixture<SignalCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

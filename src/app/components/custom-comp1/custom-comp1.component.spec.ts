import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComp1Component } from './custom-comp1.component';

describe('CustomComp1Component', () => {
  let component: CustomComp1Component;
  let fixture: ComponentFixture<CustomComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomComp1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

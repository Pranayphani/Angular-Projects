import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComp2Component } from './custom-comp2.component';

describe('CustomComp2Component', () => {
  let component: CustomComp2Component;
  let fixture: ComponentFixture<CustomComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomComp2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

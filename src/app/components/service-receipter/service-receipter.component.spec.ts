import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceReceipterComponent } from './service-receipter.component';

describe('ServiceReceipterComponent', () => {
  let component: ServiceReceipterComponent;
  let fixture: ComponentFixture<ServiceReceipterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceReceipterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceReceipterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

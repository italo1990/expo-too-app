import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceExplanation } from './service-explanation';

describe('ServiceExplanation', () => {
  let component: ServiceExplanation;
  let fixture: ComponentFixture<ServiceExplanation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceExplanation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceExplanation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

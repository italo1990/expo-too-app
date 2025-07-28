import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingExplanation } from './routing-explanation';

describe('RoutingExplanation', () => {
  let component: RoutingExplanation;
  let fixture: ComponentFixture<RoutingExplanation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingExplanation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingExplanation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

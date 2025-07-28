import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentExplanation } from './component-explanation';

describe('ComponentExplanation', () => {
  let component: ComponentExplanation;
  let fixture: ComponentFixture<ComponentExplanation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentExplanation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentExplanation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OopExplanation } from './oop-explanation';

describe('OopExplanation', () => {
  let component: OopExplanation;
  let fixture: ComponentFixture<OopExplanation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopExplanation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OopExplanation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

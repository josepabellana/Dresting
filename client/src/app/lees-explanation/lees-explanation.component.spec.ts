import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeesExplanationComponent } from './lees-explanation.component';

describe('LeesExplanationComponent', () => {
  let component: LeesExplanationComponent;
  let fixture: ComponentFixture<LeesExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeesExplanationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeesExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

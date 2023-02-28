import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentExplanationComponent } from './rent-explanation.component';

describe('RentExplanationComponent', () => {
  let component: RentExplanationComponent;
  let fixture: ComponentFixture<RentExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentExplanationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

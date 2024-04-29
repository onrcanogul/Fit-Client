import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateCalorieComponent } from './calculate-calorie.component';

describe('CalculateCalorieComponent', () => {
  let component: CalculateCalorieComponent;
  let fixture: ComponentFixture<CalculateCalorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculateCalorieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculateCalorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

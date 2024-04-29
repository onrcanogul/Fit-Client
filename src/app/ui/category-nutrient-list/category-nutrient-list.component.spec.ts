import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryNutrientListComponent } from './category-nutrient-list.component';

describe('CategoryNutrientListComponent', () => {
  let component: CategoryNutrientListComponent;
  let fixture: ComponentFixture<CategoryNutrientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryNutrientListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryNutrientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryNutrientListComponent } from './category-nutrient-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CategoryNutrientListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:"", component:CategoryNutrientListComponent}
    ])
  ]
})
export class CategoryNutrientListModule { }

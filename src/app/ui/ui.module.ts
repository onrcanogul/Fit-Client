import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import { FoodsModule } from './foods/foods.module';
import { ExercisesModule } from './exercises/exercises.module';
import { HomeModule } from './home/home.module';
import { CategoryNutrientListModule } from './category-nutrient-list/category-nutrient-list.module';
import { CategoryModule } from './category/category.module';
import { RegisterComponent } from './register/register.component';
import { RegisterModule } from './register/register.module';
import { ProfileModule } from './profile/profile.module';



@NgModule({
  declarations: [
    UiComponent,

  ],
  imports: [
    CommonModule,
    FoodsModule,
    ExercisesModule,
    HomeModule,
    CategoryNutrientListModule,
    CategoryModule,
    RegisterModule,
    ProfileModule
  ]
})
export class UiModule { }

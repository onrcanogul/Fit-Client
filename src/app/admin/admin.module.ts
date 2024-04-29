import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { FoodsModule } from './foods/foods.module';
import { ExercisesModule } from './exercises/exercises.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CategoriesModule } from './categories/categories.module';
import { LayoutModule } from './layout/layout.module';
import { UsersModule } from './users/users.module';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    FoodsModule,
    ExercisesModule,
    DashboardModule,
    CategoriesModule,
    LayoutModule,
    UsersModule
  ],
  exports:[LayoutModule]
})
export class AdminModule { }

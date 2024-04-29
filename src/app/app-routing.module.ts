import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { FoodsComponent } from './admin/foods/foods.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"foods",loadChildren:() => import("./ui/foods/foods.module").then(module => module.FoodsModule)},
  {path:"foods/:categoryId",loadChildren:() => import("./ui/foods/foods.module").then(module => module.FoodsModule)},
  {path:"exercises",loadChildren:() => import("./ui/exercises/exercises.module").then(module => module.ExercisesModule)},
  {path:"register",loadChildren:() => import("./ui/register/register.module").then(module => module.RegisterModule)},
  {path:"login",loadChildren:() => import("./ui/login/login.module").then(module => module.LoginModule)},
  {path:"profile",loadChildren:() => import("./ui/profile/profile.module").then(module => module.ProfileModule)},
  {path:"category-nutrients-list",loadChildren:() => import("./ui/category-nutrient-list/category-nutrient-list.module").then(module => module.CategoryNutrientListModule)},
  {path:"calculate-calorie",loadChildren:() => import("./ui/calculate-calorie/calculate-calorie.module").then(module => module.CalculateCalorieModule)},
  {path:"categories",loadChildren:() => import("./ui/category/category.module").then(module => module.CategoryModule)},
  {path:"admin", component:LayoutComponent, children: [
    {path:"",component:DashboardComponent,canActivate:[authGuard]},
    {path:"foods",loadChildren:() => import("./admin/foods/foods.module").then(module => module.FoodsModule),canActivate:[authGuard]},
    {path:"categories",loadChildren:() => import("./admin/categories/categories.module").then(module => module.CategoriesModule),canActivate:[authGuard]},
    {path:"exercises",loadChildren:() => import("./admin/exercises/exercises.module").then(module => module.ExercisesModule),canActivate:[authGuard]},
    {path:"users",loadChildren:() => import("./admin/users/users.module").then(module => module.UsersModule),canActivate:[authGuard]}
    
  ],canActivate:[authGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

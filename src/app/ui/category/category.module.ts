import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    RouterModule.forChild([
      {path:"",component: CategoryComponent}
    ])
  ]
})
export class CategoryModule { }

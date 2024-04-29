import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodsComponent } from './foods.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [
    FoodsComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:FoodsComponent}
    ])
  ]
})
export class FoodsModule { }

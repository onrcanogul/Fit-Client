import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodsComponent } from './foods.component';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    FoodsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,MatButtonModule,MatInputModule,
    RouterModule.forChild([
    {path:"",component:FoodsComponent}      
    ])
  ],
  exports:[FoodsComponent]
})
export class FoodsModule { }

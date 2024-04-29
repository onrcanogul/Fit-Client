import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesComponent } from './exercises.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ExercisesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:ExercisesComponent}
    ])
  ]
})
export class ExercisesModule { }

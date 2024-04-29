import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateCalorieComponent } from './calculate-calorie.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    CalculateCalorieComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,MatFormFieldModule,MatButtonModule,MatInputModule,MatFormFieldModule,MatButtonModule,MatTableModule,MatPaginatorModule,MatSidenavModule,MatListModule,
    RouterModule.forChild([
      {path:"",component:CalculateCalorieComponent}
    ])
  ]
})
export class CalculateCalorieModule { }

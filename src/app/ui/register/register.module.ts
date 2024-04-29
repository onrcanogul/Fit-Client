import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    MatInputModule,MatFormFieldModule,MatButtonModule,MatSelectModule,
    RouterModule.forChild([
      {path:"",component:RegisterComponent}
    ])
  ]
})
export class RegisterModule { }

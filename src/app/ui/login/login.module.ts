import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,MatFormFieldModule,MatButtonModule,MatSelectModule,
    RouterModule.forChild([
      {path:"",component:LoginComponent}
    ])
  ]
})
export class LoginModule { }

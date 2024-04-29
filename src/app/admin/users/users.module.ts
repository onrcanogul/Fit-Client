import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,MatFormFieldModule,MatButtonModule,MatTableModule,MatPaginatorModule,MatSidenavModule,
    RouterModule.forChild([
      {path:"",component:UsersComponent}
    ])
  ]
})
export class UsersModule { }

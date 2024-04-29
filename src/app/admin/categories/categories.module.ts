import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [
    CategoriesComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,MatFormFieldModule,MatButtonModule,MatTableModule,MatPaginatorModule,MatSidenavModule,
    RouterModule.forChild([
      {path:"",component:CategoriesComponent}
    ])
  ]
})
export class CategoriesModule { }

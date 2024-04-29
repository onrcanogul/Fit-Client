import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesComponent } from './exercises.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    ExercisesComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,MatFormFieldModule,MatButtonModule,MatTableModule,MatPaginatorModule,MatSidenavModule,
    FormsModule,
    RouterModule.forChild([
      {path:"",component:ExercisesComponent}
    ])
  ]
})
export class ExercisesModule { }

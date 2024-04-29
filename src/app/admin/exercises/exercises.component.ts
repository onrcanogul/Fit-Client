import { Component, ViewChild } from '@angular/core';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.css'
})
export class ExercisesComponent {



  @ViewChild(ListComponent) listComponent: ListComponent
  async createdProduct() {
    await this.listComponent.getExercises();
  }

}

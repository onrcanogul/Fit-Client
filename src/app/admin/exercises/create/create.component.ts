import { Component, EventEmitter, Output } from '@angular/core';
import { BaseComponent, spinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ExerciseService } from '../../../services/common/models/exercise.service';
import { CreateExercise } from '../../../contracts/exercises/create-exercise';
import { CustomToastrService, ToastrPosition, ToastrType } from '../../../services/common/custom-toastr.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent  extends BaseComponent{
  constructor(spinner:NgxSpinnerService,private exerciseService:ExerciseService,private toastr:CustomToastrService){
    super(spinner);
  }

   @Output() createdExercise: EventEmitter<any> = new EventEmitter();
  
  createExercise(name:string,calorie:string,minute:string) {
    this.showSpinner(spinnerType.BallFall)
    const createExercise: CreateExercise = new CreateExercise();
    createExercise.calorie = parseInt(calorie);
    createExercise.minute = parseInt(minute);
    createExercise.name = name;
    this.exerciseService.createExercise(createExercise,() => {
      this.createdExercise.emit();
      this.showSpinner(spinnerType.BallFall)
      this.toastr.message("Egzersiz eklendi","Başarılı",ToastrType.Success,ToastrPosition.TopRight);
    })

  }
}

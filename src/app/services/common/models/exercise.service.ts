import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { ListExercises } from '../../../contracts/exercises/list-exercise';
import { Observable, firstValueFrom } from 'rxjs';
import { CreateExercise } from '../../../contracts/exercises/create-exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private httpClientService:HttpClientService) { }

  async getExercises(page:number, size:number, successCallback?:() => void,errorCallback?:() => void): Promise<ListExercises>{
    const obs : Observable<ListExercises> = this.httpClientService.get<ListExercises>({
      contoller:"exercises",
      queryString: `page=${page}&size=${size}`
    })

    const promiseData = firstValueFrom(obs)
    successCallback ? promiseData.then(v => successCallback()):promiseData.then();
    errorCallback ? promiseData.catch(v => errorCallback()) : promiseData.catch();

    return await promiseData;
  }

  async createExercise(exercise:Partial<CreateExercise>, successCallback:() => void): Promise<void> {
    debugger;
    const obs = this.httpClientService.post({
      contoller:"exercises",
    },exercise);
    await firstValueFrom(obs)
    successCallback();
  }
}

import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Observable, firstValueFrom } from 'rxjs';
import { ListNutrients } from '../../../contracts/foods/list-food';
import { CreateFood } from '../../../contracts/foods/create-food';

@Injectable({
  providedIn: 'root'
})
export class NutrientService {

  constructor(private httpClientService:HttpClientService) { }

  async get(page:number,size:number,categoryId?:string|null, successCallback?:() => void): Promise<ListNutrients> {
    let queryString = `page=${page}&size=${size}`
    const obs: Observable<ListNutrients> = this.httpClientService.get<ListNutrients>({
      contoller:"nutrients",
      queryString: `${queryString}${categoryId?`&categoryId=${categoryId}`:""}` 
    });
    const promiseData = firstValueFrom(obs);
    promiseData.then(v => successCallback())
    
    return await promiseData
  }
  
  async create(food:Partial<CreateFood>, successCallback:() => void): Promise<void> {
    debugger;
    const obs = this.httpClientService.post({
      contoller:"nutrients"
    },food);
    await firstValueFrom(obs)
    successCallback();
  }

  async getWithCategory(page:number, size:number, categoryId:string,successCallback?:()=> void) {
    const obs = this.httpClientService.get({
      contoller:"nutrients",
      queryString:`page=${page}&size=${size}&categoryId=${categoryId}`
    })
    const promiseData = firstValueFrom(obs);
    promiseData.then(v => successCallback())
    return await promiseData;

  }
}

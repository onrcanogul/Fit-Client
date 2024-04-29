import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Observable, firstValueFrom } from 'rxjs';
import { ListCategory } from '../../../contracts/categories/list-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClientService:HttpClientService) { }
  

 async getCategories(page: number, size: number, successCallback?:() => void, errorCallback?:() => void) : Promise<ListCategory>{
   const obs : Observable<ListCategory> = this.httpClientService.get<ListCategory>({
      contoller:"categories",
      queryString:`page=${page}&size=${size}`
    });
    const promiseData = firstValueFrom(obs);
    promiseData.then(v => successCallback());
    promiseData.catch(e => errorCallback());

    return await promiseData;
  }

  async createCategory(name:string,successCallback?:() => void) : Promise<void> {
    debugger
   const obs = this.httpClientService.post({
      contoller:"categories"
    },{name});
    successCallback();
    await firstValueFrom(obs)
    
  }
}

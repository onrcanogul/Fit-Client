import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Observable, firstValueFrom } from 'rxjs';
import { ListBasketItem } from '../../../contracts/basket/basket-item';

@Injectable({
  providedIn: 'root'
})
export class BasketCalorieService {

  constructor(private httpClientService:HttpClientService) { }

  async getBasketItems(successCallback?:() => void):Promise<ListBasketItem>{
    const obs : Observable<ListBasketItem> = this.httpClientService.get<ListBasketItem>({
      contoller:"basketcalories"
    });


    const promiseData =  firstValueFrom(obs);
    promiseData.then(v => successCallback())
    return await promiseData;
  }

  async addBasketItemToBasket(nutrientId: string, measure: number, successCallback:() => void) {
    debugger;
    const obs = this.httpClientService.post({
      contoller:"BasketCalories"
    },{nutrientId,measure})

    await firstValueFrom(obs);
    successCallback();
  }

  async updateMeasure(measure:number,basketItemId: string, successCallback?:() => void) {
    debugger;
    const obs = this.httpClientService.put({
      contoller:"basketcalories"
    },{measure : measure,basketItemId :basketItemId})

    await firstValueFrom(obs);
    successCallback();
  }
}

import { Nutrient } from "../foods/list-food";

export class ListBasketItem{
    
    basketItems: BasketItem[]
    totalCarbohydrate: number;
    totalProtein: number;
    totalFat: number;
    totalCalorie: number

}


export class BasketItem{
    id : string;
    protein : number;
    measure: number;
    fat: number;
    carbohydrate: number;
    calorie: number;
    name: string;
}




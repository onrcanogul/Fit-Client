import { Nutrient } from "../foods/list-food";

export class ListCategory{
    totalCount: number;
    entity:Category[];
}

export class Category{
    id: string;
    name:string;
    nutrients:Nutrient[]
}
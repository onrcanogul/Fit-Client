import { Category } from "../categories/list-category";

export class ListNutrients {
    totalCount :number;
    foods: Nutrient[]
}

export class Nutrient {
    id:string;
    name: string;
    fat: number;
    protein: number;
    carbohydrate:number;
    calorie: number;
    categories:Category[]
}

// Fat = food.Fat,
// Protein = food.Protein,
// Name = food.Name,
// Carbohydrate = food.Carbohydrate,
// Calorie = food.Calorie,
// Categories = food.Categories
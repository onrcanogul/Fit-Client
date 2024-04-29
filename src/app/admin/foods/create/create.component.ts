import { Component } from '@angular/core';
import { BaseComponent } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { NutrientService } from '../../../services/common/models/nutrient.service';
import { CustomToastrService, ToastrPosition, ToastrType } from '../../../services/common/custom-toastr.service';
import { CreateFood } from '../../../contracts/foods/create-food';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent extends BaseComponent {
  constructor(spinner:NgxSpinnerService,private nutrientService:NutrientService,private toastr:CustomToastrService) {
    super(spinner)
  }


  async createFood(name:string, carb:string ,fat: string,protein: string, calorie:string) {

    const createFood: CreateFood = new CreateFood()
    createFood.calorie = parseInt(calorie),
    createFood.protein = parseInt(protein),
    createFood.fat = parseInt(fat),
    createFood.name = name as string,
    createFood.carbohydrate = parseInt(carb)

    await this.nutrientService.create(createFood,() => {
      this.toastr.message("Yemek eklendi","Başarılı", ToastrType.Success, ToastrPosition.TopRight)
    })
  } 

}

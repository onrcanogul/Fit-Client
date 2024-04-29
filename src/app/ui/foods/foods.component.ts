import { Component, OnInit } from '@angular/core';
import { BaseComponent, spinnerType } from '../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { NutrientService } from '../../services/common/models/nutrient.service';
import { CustomToastrService, ToastrPosition, ToastrType } from '../../services/common/custom-toastr.service';
import { ListNutrients, Nutrient } from '../../contracts/foods/list-food';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketCalorieService } from '../../services/common/models/basket-calorie.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css'
})
export class FoodsComponent extends BaseComponent implements OnInit {
  constructor(spinner:NgxSpinnerService, private nutrientService:NutrientService,private toastr:CustomToastrService, private router:Router, private activatedRoute:ActivatedRoute,private basketCalorieService:BasketCalorieService){
    super(spinner)
  }
  ngOnInit(): void {
    this.getFoods();
  }
  nutrients:ListNutrients;
  foods:Nutrient[];
  queryString:string;
  async getFoods(){
    
    this.activatedRoute.params.subscribe(async params => {
      debugger;
      this.queryString = params["categoryId"]; 
      this.showSpinner(spinnerType.BallFall);
      this.nutrients = await this.nutrientService.get(0,12,this.queryString,()=> {
      this.hideSpinner(spinnerType.BallFall);
      
    })
      this.foods = this.nutrients.foods
    })
    
    

   
  }

 async addToBasketItem(id:string,measure:string) {
      debugger;
      this.showSpinner(spinnerType.BallFall)
      const newMeasure = parseInt(measure);
      await this.basketCalorieService.addBasketItemToBasket(id,newMeasure,() => {
        this.hideSpinner(spinnerType.BallFall)
        this.toastr.message("Kalori sepetine ürün eklendi","Başarılı",ToastrType.Success,ToastrPosition.TopRight)
      })
  }

}

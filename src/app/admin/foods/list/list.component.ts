import { Component, OnInit } from '@angular/core';
import { BaseComponent, spinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { NutrientService } from '../../../services/common/models/nutrient.service';
import { ListNutrients } from '../../../contracts/foods/list-food';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent extends BaseComponent implements OnInit {
  constructor(spinner:NgxSpinnerService,private nutrientService:NutrientService) {
    super(spinner)
  }

  async getFoods() {
    this.showSpinner(spinnerType.BallFall)
    this.foods = await this.nutrientService.get(0,5,null,() => {
      this.hideSpinner(spinnerType.BallFall)
      console.log(this.foods?.foods);    
    });
    
  }


  foods? : ListNutrients;
  totalFoodCount?: number;
  totalPageCount?: number;
  
  async ngOnInit() {
    await this.getFoods();
  }


}

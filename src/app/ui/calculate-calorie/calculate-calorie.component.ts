import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent, spinnerType } from '../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { BasketCalorieService } from '../../services/common/models/basket-calorie.service';
import { ListBasketItem } from '../../contracts/basket/basket-item';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TokenService } from '../../services/common/token.service';
import { UserService } from '../../services/common/models/user.service';
import { User } from '../../contracts/user/list-user';

@Component({
  selector: 'app-calculate-calorie',
  templateUrl: './calculate-calorie.component.html',
  styleUrl: './calculate-calorie.component.css'
})
export class CalculateCalorieComponent extends BaseComponent implements OnInit {
  constructor(spinner:NgxSpinnerService,private basketCalorieService:BasketCalorieService,private tokenService:TokenService, private userService:UserService) {
    super(spinner)
  }
  id:string;
  activeUser : User;
  items : ListBasketItem
  color : string
  async ngOnInit() {
    debugger;
    this.id = this.tokenService.currentUsersId();
    await this.getActiveUser();
    await this.getBasketItems();
    console.log(this.activeUser);
    
    this.color =  (this.activeUser.bmr <= this.items.totalCalorie )? "green" : "red"
  }
  
  async getBasketItems() {   
    this.showSpinner(spinnerType.BallFall)
    this.items = await this.basketCalorieService.getBasketItems(() => {
      this.hideSpinner(spinnerType.BallFall)
    })
  }


  async updateMeasure(measure:string,basketItemId:string){
    this.showSpinner(spinnerType.BallFall)
    const newMeasure:number = parseInt(measure)
    await this.basketCalorieService.updateMeasure(newMeasure,basketItemId,async() => {
      this.hideSpinner(spinnerType.BallFall)
      await this.getBasketItems();
    })
  }

  async getActiveUser() {
    this.activeUser = await this.userService.getUserById(this.id)
  }

  

  
  

}

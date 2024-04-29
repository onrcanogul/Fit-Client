import { Component, OnInit } from '@angular/core';
import { BaseComponent, spinnerType } from '../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TokenService } from '../../services/common/token.service';
import { UserService } from '../../services/common/models/user.service';
import { User } from '../../contracts/user/list-user';
import { UpdateUser } from '../../contracts/user/update-user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent extends BaseComponent implements OnInit {
  constructor(spinner:NgxSpinnerService,private tokenService:TokenService, private userService:UserService){
    super(spinner)
  }
  id:string;
  async ngOnInit(){
    this.id = this.tokenService.currentUsersId()
    this.user = await this.userService.getUserById(this.id);  
  }
  user:User
  async update(height:string, weight:string ,fatRate:string,age:string ,activity:string) {
    this.showSpinner(spinnerType.BallFall)
     const updateUser:UpdateUser = new UpdateUser();
     updateUser.activity = activity;
     updateUser.id = this.id;
     updateUser.age = parseInt(age);
     updateUser.fatRate = parseInt(fatRate);
     updateUser.height = parseInt(height);
     updateUser.weight = parseInt(weight)
     this.userService.updateUser(updateUser,() => {
      this.hideSpinner(spinnerType.BallFall)
     })
  }
}

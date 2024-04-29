import { Component } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { BaseComponent, spinnerType } from '../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../../services/common/models/user.service';
import { CreateUser } from '../../contracts/user/create-user';
import { CustomToastrService, ToastrPosition, ToastrType } from '../../services/common/custom-toastr.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent extends BaseComponent {
  constructor(spinner:NgxSpinnerService,private userService:UserService, private toastr:CustomToastrService){
    super(spinner);
  }


  register(gender:number, email:string , username:string, password:string, passwordConfirm:string) {
    this.showSpinner(spinnerType.BallFall)
    const createUser: CreateUser = new CreateUser()
    createUser.email = email,
    createUser.gender = gender,
    createUser.password = password,
    createUser.passwordConfirm = passwordConfirm,
    createUser.username = username
    this.userService.create(createUser,() => {
      this.hideSpinner(spinnerType.BallFall)
      this.toastr.message("Kayıt olma işlemi başarılı","Başarılı",ToastrType.Success,ToastrPosition.TopRight)
    })
      
  }

  gender: Gender[] = [
    {value: '1', viewValue: 'Erkek'},
    {value: '2', viewValue: 'Kadın'},
  ];

}

interface Gender {
  value: string;
  viewValue: string;
}

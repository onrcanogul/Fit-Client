import { Component } from '@angular/core';
import { BaseComponent, spinnerType } from '../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthUserService } from '../../services/common/models/auth-user.service';
import { CustomToastrService, ToastrPosition, ToastrType } from '../../services/common/custom-toastr.service';
import { AuthService } from '../../services/common/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent extends BaseComponent {
  constructor(spinner:NgxSpinnerService, private authUserService:AuthUserService,private toastr: CustomToastrService,private authService:AuthService) {
    super(spinner)
  }


  login(email: string, password: string){
    this.showSpinner(spinnerType.BallFall)
    this.authUserService.login({email, password},() => {
      this.hideSpinner(spinnerType.BallFall)
      this.authService.identityCheck();     
    })
  } 

}

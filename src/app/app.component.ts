import { Component, OnInit } from '@angular/core';
import { CustomToastrService, ToastrPosition, ToastrType } from './services/common/custom-toastr.service';
import { BaseComponent, spinnerType } from './base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthUserService } from './services/common/models/auth-user.service';
import { AuthService } from './services/common/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  constructor(public authService:AuthService){

  }
  state: boolean

  logout(){
     localStorage.removeItem('accessToken') 
     localStorage.removeItem('refreshToken') 
     this.authService.identityCheck();
  }
  
  
 
  

  
}



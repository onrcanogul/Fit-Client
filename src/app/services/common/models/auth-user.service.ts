import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { LoginUser } from '../../../contracts/auth/login-user';
import { Observable, firstValueFrom } from 'rxjs';
import { Token } from '../../../contracts/auth/token';
import { CustomToastrService, ToastrPosition, ToastrType } from '../custom-toastr.service';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor(private httpClientService:HttpClientService, private toastr:CustomToastrService) { }

  async login(user: Partial<LoginUser>,callback?:() => void) : Promise<void> {
    const obs : Observable<any> = this.httpClientService.post<any>({
      contoller:"auth",
      action:"login"
    },user);


    const token:Token = await firstValueFrom(obs) as Token;
    if(token){
        console.log(token);
        localStorage.setItem('accessToken',token.accessToken)
        localStorage.setItem('refreshToken', token.refreshToken)
        this.toastr.message("Giriş yapıldı","Başarılı",ToastrType.Success,ToastrPosition.TopRight)
    }   
    callback();
  }

  async refreshTokenLogin(refreshToken: string, callback?:(state) => void) {
    const obs: Observable<any | Token> = this.httpClientService.post({
      contoller:"auth",
      action:"refresh-token-login"
    },{refreshToken});

    try{
      const token:Token = await firstValueFrom(obs) as Token;
      if(token) {
        localStorage.setItem('accessToken',token.accessToken);
        localStorage.setItem('refreshToken',token.refreshToken);
      }
      callback(token? true : false);
    }catch{
      callback(false);
    }
  }
  
}

import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private jwtHelper:JwtHelperService) { }

  decodeToken(){
    const token = localStorage.getItem('accessToken');
    if(!this.jwtHelper.isTokenExpired(token)){
      return this.jwtHelper.decodeToken(token)
      
    }
    else null;
  }


  currentUsersId():string {
    const decodedToken = this.decodeToken()
    return decodedToken['id'];
  }
  currentUserGender():string {
    const decodedToken = this.decodeToken();
    const gender = decodedToken['gender']
    if(gender == 1){
      return "Erkek"
    }else if(gender == 2){
      return "Kadın"
    }else
    return null;
    
  }
}

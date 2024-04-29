import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { CreateUser } from '../../../contracts/user/create-user';
import { Observable, firstValueFrom } from 'rxjs';
import { ListUsers, User } from '../../../contracts/user/list-user';
import { UpdateUser } from '../../../contracts/user/update-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClientService:HttpClientService) { }

  async create(user: Partial<CreateUser>, successCallBack?:() => void): Promise<void>{
   const obs =  this.httpClientService.post({
      contoller:"users"
    },user)

 
    await firstValueFrom(obs)
    successCallBack();
  } 

  async getUsers(page:number, size:number,successCallBack?:() => void, errorCallback?:() => void): Promise<ListUsers>{
    const obs:Observable<ListUsers> = this.httpClientService.get<ListUsers>({
      contoller:"users",
      queryString:`page=${page}&size=${size}`
    });

    const promiseData = firstValueFrom(obs);
    promiseData.then(v => successCallBack());
    promiseData.catch(e => errorCallback());

    return await promiseData;

    
  }

  async getUserById(id:string,successCallBack?:() => void, errorCallback?:() => void): Promise<User>{

    const obs:Observable<User> = this.httpClientService.get<User>({
      contoller:"users",
      action:"user-id",
      queryString:`id=${id}`
    });

    const promiseData = firstValueFrom(obs);
    promiseData.then(v => successCallBack());
    promiseData.catch(e => errorCallback());

    const data = await promiseData;
    return data;
  }

  async updateUser(user:UpdateUser,successCallBack?:() => void){
    const obs = this.httpClientService.put({
      contoller:"users"
    },user)

    await firstValueFrom(obs);
    successCallBack();
  }
}

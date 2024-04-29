import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastrService:ToastrService) { }

  message(message: string, title: string , type: ToastrType, position:ToastrPosition) {
    return this.toastrService[type](message, title,{positionClass: position})
  }
}



export enum ToastrType{
  Success="success",
  Error ="error",
  Info ="info",
  Warning="warning"
}

export enum ToastrPosition{
  TopRight='toast-top-right',
  BottomRight='toast-bottom-right',
  TopLeft='toast-top-left',
  BottomLeft='toast-bottom-left'
}

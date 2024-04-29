import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {
  constructor(public spinner:NgxSpinnerService){

  }

  

  showSpinner(type:spinnerType){
    this.spinner.show(type)
    setTimeout(() => 
      this.hideSpinner(type)
    ,2000);
  }
  hideSpinner(type:spinnerType){
    this.spinner.hide(type)
  }

}

export enum spinnerType{
  BallFall = "s1",
  BallScaleMultiple = "s2"
}




import { Component, OnInit } from '@angular/core';
import { BaseComponent, spinnerType } from '../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { CategoryService } from '../../services/common/models/category.service';
import { ListCategory } from '../../contracts/categories/list-category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent extends BaseComponent implements OnInit {
  constructor(spinner:NgxSpinnerService, private categoryService:CategoryService){
    super(spinner)
  }
  async ngOnInit(){
    await this.getCategories();
  }

  categoryList: ListCategory;
  async getCategories() {
      this.showSpinner(spinnerType.BallFall)
     this.categoryList =  await this.categoryService.getCategories(0,12,() => {
      this.hideSpinner(spinnerType.BallFall)
    });
  }
}

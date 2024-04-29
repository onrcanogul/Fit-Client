import { Component } from '@angular/core';
import { BaseComponent, spinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { CategoryService } from '../../../services/common/models/category.service';
import { CustomToastrService, ToastrPosition, ToastrType } from '../../../services/common/custom-toastr.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent extends BaseComponent {
  constructor(spinner: NgxSpinnerService, private categoryService : CategoryService,private toastr:CustomToastrService) {
    super(spinner);
  }
  async createCategory(name : string){
    this.showSpinner(spinnerType.BallFall)
    await this.categoryService.createCategory(name,() => {
      this.toastr.message("Kategori başarıyla eklendi","Başarılı",ToastrType.Success,ToastrPosition.TopRight)
    });
  }
}

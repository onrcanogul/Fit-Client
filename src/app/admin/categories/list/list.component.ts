import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent, spinnerType } from '../../../base/base.component';
import { ExerciseService } from '../../../services/common/models/exercise.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatPaginator } from '@angular/material/paginator';
import { Exercise, ListExercises } from '../../../contracts/exercises/list-exercise';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from '../../../services/common/models/category.service';
import { Category, ListCategory } from '../../../contracts/categories/list-category';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent extends BaseComponent implements OnInit {
  constructor(spinner:NgxSpinnerService,private categoryService:CategoryService) {
    super(spinner)
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'name',];
  dataSource:any = null; 

  async getCategories() {
    debugger;
    this.showSpinner(spinnerType.BallFall)
    const listCategories: ListCategory = await this.categoryService.getCategories(this.paginator ? this.paginator.pageIndex : 0 ,this.paginator ? this.paginator.pageSize : 5)
    this.dataSource = new MatTableDataSource<Category>(listCategories.entity);
    this.paginator.length = listCategories.totalCount;
  }

  async ngOnInit() {
    await this.getCategories();
  }
  async pageChanged() {
    await this.getCategories();
  }

}
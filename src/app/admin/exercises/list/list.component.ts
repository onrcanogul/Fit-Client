import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise, ListExercises } from '../../../contracts/exercises/list-exercise';
import { BaseComponent, spinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ExerciseService } from '../../../services/common/models/exercise.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent extends BaseComponent implements OnInit {
  constructor(spinner:NgxSpinnerService,private exerciseService:ExerciseService) {
    super(spinner)
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['name', 'minute', 'calorie'];
  dataSource:any = null; 

  async getExercises() {
    debugger;
    this.showSpinner(spinnerType.BallFall)
    const listExercises : ListExercises = await this.exerciseService.getExercises(this.paginator ? this.paginator.pageIndex : 0 ,this.paginator ? this.paginator.pageSize : 5)
    this.dataSource = new MatTableDataSource<Exercise>(listExercises.entity);
    this.paginator.length = listExercises.totalCount;
  }

  async ngOnInit() {
    await this.getExercises();
  }
  async pageChanged() {
    await this.getExercises();
  }

}



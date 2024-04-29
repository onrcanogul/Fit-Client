import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent, spinnerType } from '../../base/base.component';
import { ExerciseService } from '../../services/common/models/exercise.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatPaginator } from '@angular/material/paginator';
import { ListUsers, User } from '../../contracts/user/list-user';
import { UserService } from '../../services/common/models/user.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent extends BaseComponent implements OnInit {
  constructor(spinner:NgxSpinnerService,private userService:UserService) {
    super(spinner)
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['username', 'age','gender','height','weight','fatrate','activity','BMR'];
  dataSource:any = null; 
  // id: string;
  // fatRate: number;
  // activity: string;
  // age: number;
  // BMR: number;
  // email: string;
  // height: number;
  // weight: number;
  // gender: number;
  // username: string;
  async getUsers() {
    debugger;
    this.showSpinner(spinnerType.BallFall)
    const listUsers : ListUsers = await this.userService.getUsers(this.paginator ? this.paginator.pageIndex : 0 ,this.paginator ? this.paginator.pageSize : 5)
    this.dataSource = new MatTableDataSource<User>(listUsers.entity);
    this.paginator.length = listUsers.totalCount;
  }

  async ngOnInit() {
    await this.getUsers();
  }
  async pageChanged() {
    await this.getUsers();
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {ThemePalette} from '@angular/material/core';
import { AdminService } from 'src/app/shared/services/admin.service';
export interface PeriodicElement {
  employee_name: string;
  employee_salary: number;
  // manager: string;
  employee_age: number;
  id: number;
}
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any;
  dataSource!: MatTableDataSource<PeriodicElement>;
  user!: Object;

  constructor(private _UsersService: AdminService) {
  }
  ngOnInit(): void {
    this.getUsers()
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  //Get Users
  getUsers() {
    this._UsersService.getAllAdmins().subscribe((res: any) => {
      this.users = res.data;
      console.log(this.users)
          console.log(this.user)
          this.dataSource = new MatTableDataSource<PeriodicElement>(this.users);
          this.dataSource.paginator = this.paginator;
    })
  }
  //Delete Users
  deleteUser(id: any) {
    this._UsersService.deleteAdmin(id).subscribe((res: any) => {
      alert("Delete item")
      this.getUsers()
    },
      (      err: any) => {
        console.log(err)
      })
  }
  //add Users
  addUser(id: any) {
    this._UsersService.addAdmin(id).subscribe((res: any) => {
      alert("add item")
      this.getUsers()
    },
      (      err: any) => {
        console.log(err)
      })
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  displayedColumns: string[] = ['id','employee_name', 'employee_age', "actions"];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

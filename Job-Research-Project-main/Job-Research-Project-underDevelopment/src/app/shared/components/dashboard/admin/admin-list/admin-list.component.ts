import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AdminService } from 'src/app/shared/services/admin.service';
export interface PeriodicElement {
  employee_name: string;
  employee_salary: number;
  // manager: string;
  employee_age: number;
  id: number;
}
@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
  users: any;
  dataSource!: MatTableDataSource<PeriodicElement>;
  user!: Object;

  constructor(private _AdminService: AdminService) {
  }
  ngOnInit(): void {
    this.getAdmins()
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  //Get Users
  getAdmins() {
    this._AdminService.getAllAdmins().subscribe((res: any) => {
      this.users = res.data;
      console.log(this.users)
      console.log(this.user)
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.users);
      this.dataSource.paginator = this.paginator;
    })
  }
  //Delete Users
  deleteAdmin(id: any,name:any) {
    this._AdminService.deleteAdmin(id).subscribe((res: any) => {
      alert("Delete Admin "+name+" ")
      console.log(res)
    },
      (err: any) => {
        console.log(err)
      })
  }
  //add Users
  addUser(id: any) {
    this._AdminService.addAdmin(id).subscribe((res: any) => {
      alert("add item")
      this.getAdmins()
    },
      (err: any) => {
        console.log(err)
      })
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  displayedColumns: string[] = ['id', 'employee_name', 'employee_age', "actions"];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss']
})
export class UserAddEditComponent implements OnInit {


  singleSelect: any;
  addEditForm!: FormGroup;
  submitted!: boolean;
  itemId: any;
  isAddMode!: boolean;
  userDetails: any = {};
  public show = false;
  // eslint-disable-next-line @typescript-eslint/ban-types
  // userDetails!: Object;
  id: any;
  constructor(
    private _Router: Router,
    private _FormBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _adminsService: AdminService,
    private toastr: ToastrService,
  ) { }
  ngOnInit() {
    this.buildAddEditForm();
     //Get item data id
     if (!this.isAddMode){
     this.route.params.subscribe(params => {
      this.itemId = params.id;
      console.log(params.id)
      this._adminsService.getAdminById(params.id).subscribe((res: any) => {
        this.userDetails = res;
        console.log(this.userDetails)
      })
    })
  }
  }
  onSubmit() {
    this.submitted = true;
    //if in vaild stop
    if (this.addEditForm.invalid) {
      return;
    }
    if (this.isAddMode){
    this._adminsService.addAdmin(this.addEditForm.value).subscribe((response) => {
      this.itemId = response
      console.log(response)
      this.toastr.success('success', 'add user')
      // this._Router.navigate([`../labels/update/${response.headers.get('X_ID')}`])
      // this._Router.navigate([`../editGroup/${this.itemId.sgid}`])
    },
      (      err: any) => {
        this.toastr.warning('sorry you have error', err)
        console.log(err);
      }
    );
    this.addEditForm.reset()
    }
    if (!this.isAddMode){
      this._adminsService.updateAdmin(this.id,this.addEditForm.value).subscribe(() => {
        // alert("success");
        // this._Router.navigate(['../labelList'])
        this.toastr.success('success', 'update user')
      },
        ( err: any) => {
          this.toastr.warning('sorry you have error', err)
          console.log(err);
        }
      );
      }
  }

  buildAddEditForm() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.addEditForm = this._FormBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      // employee_name: ['',[ Validators.required,Validators.minLength(4),Validators.maxLength(16)]],
      age: ['', Validators.required],

      salary: ['', Validators.required],
    })
  }





}

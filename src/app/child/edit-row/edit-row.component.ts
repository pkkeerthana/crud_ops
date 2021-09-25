import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-row',
  templateUrl: './edit-row.component.html',
  styleUrls: ['./edit-row.component.scss']
})
export class EditRowComponent implements OnInit {

  details:any = {
    name:'',
    age:'',
    phone:'',
    email:'',
    select:''
  };

  constructor(
    public dialogRef: MatDialogRef<EditRowComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    this.details.name = this.data['name'];
    this.details.age = this.data['age'];
    this.details.phone = this.data['phone'];
    this.details.email = this.data['email'];
    this.details.select = this.data['select'];
  }

  onAction(option){
    if(option == 'edit'){
      this.dialogRef.close(this.details)
    }
    else{
      this.dialogRef.close('cancel');
    }
  }
}

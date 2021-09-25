import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditRowComponent } from './edit-row/edit-row.component';
import { DeleteRowComponent } from './delete-row/delete-row.component';

interface Details {
  name: string,
  age: string,
  phone: string,
  email: string,
  select:number,
  checked:boolean
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,OnChanges {

  i:number = 0;
  checked:boolean = false;
  show_table:boolean = false;
  table_data = [];
  new_entry:any;
  displayedColumns: string[] = ['select','name', 'age', 'phone', 'email'];
  dataSource = new MatTableDataSource<Details>(this.table_data);
  @Input() table_row;
  btn_clicked: string = 'view';

  constructor(
    public dialog: MatDialog
  ){}

  ngOnChanges(changes: SimpleChanges){
    if(this.table_row){
      let newdata = this.table_row.split(':');
      this.new_entry = {
        name: newdata[0],
        age: newdata[1],
        phone: newdata[2],
        email: newdata[3],
        select:this.i+1,
        checked: false
      };
      this.i= this.i+1;
      this.pushData();
    }
  }

  ngOnInit(){
    
  }

  pushData(){
    this.show_table = true;
    this.table_data.push(this.new_entry);
    this.dataSource.data = this.table_data as Details[];
  }

  onAction(menu){
    this.btn_clicked = menu;
    if(menu){
      this.table_data.forEach(element => {
        element.checked = false;
      });
      //this.dataSource.data = this.table_data as Details[];
    } 
  }

  onActionclick(option){

  }

  openDialog(ev,option){
    if(ev.checked == true){
      let component;
      if(this.btn_clicked == 'edit'){
        component = EditRowComponent;
      }
      if(this.btn_clicked == 'delete'){
        component = DeleteRowComponent;
      }
      console.log(component);
      const dialogRef = this.dialog.open(component,{
        width:'500px',
        data:option
      });
      dialogRef.afterClosed().subscribe(res => {
        if(res == 'delete'){
          let index = this.table_data.findIndex(x => x.select == option.select);
          this.table_data.splice(index,1);
          this.dataSource.data = this.table_data as Details[];
        }
        else if(res == 'cancel'){
          console.log("cancelled")
        }
        else if(typeof res == 'object'){
          let index = this.table_data.findIndex(x => x.select == option.select);
          this.table_data[index] = res;
          this.dataSource.data = this.table_data as Details[];
        }
      })
    }
  }

}

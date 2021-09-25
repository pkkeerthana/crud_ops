import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'parentchild';
  name:string;
  age:string;
  phone:string;
  email:string;
  table_data : string;

  onSubmit(){
    this.table_data = this.name + ':' + this.age + ':' + this.phone + ':' + this.email;
  }
}

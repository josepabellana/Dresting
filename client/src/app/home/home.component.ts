import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selected:string = 'owner';


  onClick(str:string){
    this.selected = str;
  }
}

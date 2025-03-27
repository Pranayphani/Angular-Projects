import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName: string='pranay';
  id: number=1;
  working: boolean=false;
  currentDate: Date=new Date();

  constructor(){
    this.working=true;
  }

  defaultSearch: string="explain about AI";
  placeHolder: string="Enter text";

  clickButton(){
    alert("You just checked the event binding");
  }
  buttonStyle: string="btn bg-primary"; 

  selectedCity: string="";
}

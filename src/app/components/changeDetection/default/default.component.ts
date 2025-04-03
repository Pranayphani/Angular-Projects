import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  imports: [],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent {
  counter: number=0;

  constructor(){
    setInterval(() => {
      this.counter++;
    }, 2000);
  }
}

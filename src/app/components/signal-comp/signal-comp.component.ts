import { Component,Injectable } from '@angular/core';
import {signal,computed} from '@angular/core';

@Component({
  selector: 'app-signal-comp',
  imports: [],
  templateUrl: './signal-comp.component.html',
  styleUrl: './signal-comp.component.css'
})

export class SignalCompComponent {
  frameWork=signal('Angular');
  compFrame=computed(()=>this.frameWork().toUpperCase());

  cancelSubscription(event: Event){
    console.log(Event)
  }

  isAdmin(){
    return false;
  }
}




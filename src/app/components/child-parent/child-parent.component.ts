import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-parent',
  imports: [],
  templateUrl: './child-parent.component.html',
  styleUrl: './child-parent.component.css'
})
export class ChildParentComponent {
  @Output() dataEvent=new EventEmitter<string>();
  sendData(){
    this.dataEvent.emit('data from child');
  }
}

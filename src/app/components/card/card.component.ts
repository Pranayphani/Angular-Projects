import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() message: string='default message';
  @Output() action=new EventEmitter<string>();

  sendEvent(){
    this.action.emit('event send');
  }
}

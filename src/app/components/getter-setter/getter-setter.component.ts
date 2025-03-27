import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-getter-setter',
  imports: [],
  templateUrl: './getter-setter.component.html',
  styleUrl: './getter-setter.component.css'
})
export class GetterSetterComponent {
  private title='';
  @Input()
  get titleChange(){
    return this.title;
  }

  set titleChange(value: string){
    this.title=value.trim().toUpperCase();
  }
}

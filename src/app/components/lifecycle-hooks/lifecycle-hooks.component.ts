import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  imports: [],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css'
})
export class LifecycleHooksComponent {
  @Input() title='';
  name='';

  ngOnInit(){
    console.log('ngoninit fired');
  }

  constructor(){
    this.name=this.title+2;
    console.log('constructor called');
  }
}

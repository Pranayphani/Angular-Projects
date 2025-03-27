import { Component, Input } from '@angular/core';
import { changeValue,trimValue } from '../services/service1';
import { GetterSetterComponent } from '../getter-setter/getter-setter.component';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  inputs:[]
})
export class CounterComponent extends GetterSetterComponent{
  @Input({required: true, transform: changeValue}) count: 
  number=0;

  @Input({transform: trimValue}) message: string=' hi';
}

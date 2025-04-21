import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent-2',
  imports: [ChildComponent],
  templateUrl: './parent-2.component.html',
  styleUrl: './parent-2.component.css'
})
export class Parent2Component {
  x = 'parent-2';
}

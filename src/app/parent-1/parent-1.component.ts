import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent-1',
  imports: [ChildComponent],
  templateUrl: './parent-1.component.html',
  styleUrl: './parent-1.component.css',
})
export class Parent1Component {
  x = 'parent-1';
}

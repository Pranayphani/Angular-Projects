import { Component } from '@angular/core';
import { DynamicListDirective } from './dynamiclist.directive';
import { StyleDirective } from './style.directive';
import { PermissionDirective } from './permission.directive';

@Component({
  selector: 'app-custom-directive',
  imports: [PermissionDirective, DynamicListDirective, StyleDirective],
  templateUrl: './custom-directive.component.html',
  styleUrl: './custom-directive.component.css'
})
export class CustomDirectiveComponent {
  players=[
    {name: 'virat'},
    {name: 'rohit'}
  ]
inputValue: string='hi';
}
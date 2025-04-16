import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-if.component.html',
})
export class NgIfComponent {
  div1Visible: boolean=true;
  string1: string='';
  string2: string='';

  hideDiv(){
    this.div1Visible=false;
  }
  showDiv(){
    this.div1Visible=true;
  }
}

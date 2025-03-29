import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-hover-click',
  imports: [],
  templateUrl: './hover-click.component.html',
  styleUrl: './hover-click.component.css',
  host: {
    '[class.hovered]': 'isHovered',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(click)': 'onClick()',
  }
})
export class HoverClickComponent {
  // @HostBinding('class.hovered') isHovered=false;

  // @HostListener('click') onClick(){
  //   console.log('element clicked');
  // }

  // @HostListener('mouseenter') onMouseEnter(){
  //   this.isHovered=true;
  // }

  // @HostListener('mouseleave') onMouseLeave(){
  //   this.isHovered=false;
  //}

  isHovered=false;

  onClick(){
    console.log('element clicked');
  }

  onMouseEnter(){
    this.isHovered=true;
  }

  onMouseLeave(){
    this.isHovered=false;
  }
}

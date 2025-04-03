import { Component, ViewChild, ElementRef, viewChild } from '@angular/core';
import { Input } from '@angular/core';
import { HoverClickComponent } from '../hover-click/hover-click.component';

@Component({
  selector: 'app-lifecycle-hooks',
  imports: [HoverClickComponent],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css'
})
export class LifecycleHooksComponent {
  // @Input() title='';
  // name='';

  // ngOnInit(){
  //   console.log('ngoninit fired');
  // }

  // constructor(){
  //   this.name=this.title+2;
  //   console.log('constructor called');
  // }
  
  @ViewChild('myRef', {static: true}) myRef!: ElementRef;
  @ViewChild('hoverComp') hoverComp!: HoverClickComponent;

  ngOnInit(){
    //console.log(this.myRef);
    console.log(this.myRef.nativeElement.innerHTML);
  }

  ngAfterViewInit(){
    console.log(this.myRef.nativeElement.innerHTML);
    console.log(this.hoverComp.onMouseEnter());
  }
}

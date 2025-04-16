import { Directive, ElementRef, HostBinding, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  //constructor(private el: ElementRef) {}

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('blue');
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('red');
  // }

  // private highlight(color: string){
  //   this.el.nativeElement.style.backgroundColor=color;
  // }

  //  ngOnInit(){
  //    this.el.nativeElement.style.backgroundColor='red';
  //  }
  
  @Input() inputValue: string='hi';
  constructor(private el: ElementRef) {}

   ngOnInit() {
      this.el.nativeElement.value = this.inputValue;
   }
  
  // @HostBinding('value') inputValue: string='hello property binding in angular';

  @HostListener('click') onClick(){
    console.log('inbuilt event listener handling in directives');
  }

  
}

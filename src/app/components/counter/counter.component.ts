import { Component, OnInit ,Input,OnChanges, SimpleChange,SimpleChanges, ViewContainerRef, ViewChild, ComponentRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { changeValue,trimValue } from '../services/service1';
import { GetterSetterComponent } from '../getter-setter/getter-setter.component';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  inputs:[],
  imports: []
})
// export class CounterComponent extends GetterSetterComponent{
//   @Input({required: true, transform: changeValue}) count: 
//   number=0;

//   @Input({transform: trimValue}) message: string=' hi';
//}

export class CounterComponent {
  // @Input() myCounter!: number;

  // public changeLog: string[]=[];

  // ngOnInit(): void {
  //    // it is used to initialise the component like constructor
  //    console.log("this is inside ngoninit");
  // }

  // ngOnChanges(changes: SimpleChanges){
  //   for(const propName in changes){
  //     const change: SimpleChange=changes[propName];
  //     const current=JSON.stringify(change.currentValue);
  //     const previous=JSON.stringify(change.previousValue);

  //     this.changeLog.push(
  //       `ngOnChanges ${propName}: currentValue=${current}, previousValue=${previous}, firstChange=${change.firstChange}`
  //     );

  //     console.log(propName);
  //     }
  //     console.log('on changes');
  // }

  // constructor(private ViewContainerRef: ViewContainerRef){
  // }

  // ngOnInit(){
  //   this.ViewContainerRef.createComponent(CardComponent)
  // }


  @ViewChild('containerRef', {read: ViewContainerRef})
  container!: ViewContainerRef;

  componentRef!: ComponentRef<CardComponent>;

  loadComp(){
    this.container.clear();
    this.componentRef=this.container.createComponent(CardComponent);
    this.componentRef.instance.message='dynamic input';
    this.componentRef.instance.action.subscribe((message)=>{
      console.log(message);
    })
  }
}
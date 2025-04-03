import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet,RouterModule } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { SignalCompComponent } from "./components/signal-comp/signal-comp.component";
import { ServiceReceipterComponent } from './components/service-receipter/service-receipter.component';
import ManualComponent from './components/manual-comp';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { GetterSetterComponent } from './components/getter-setter/getter-setter.component';
import { ChildParentComponent } from "./components/child-parent/child-parent.component";
import { CommonModule } from '@angular/common';
import { HoverClickComponent } from './components/hover-click/hover-click.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import { NgforComponent } from './components/directives/ngfor/ngfor.component';
import { CardComponent } from './components/card/card.component';
import { CounterComponent } from "./components/counter/counter.component";
import { DefaultComponent } from "./components/changeDetection/default/default.component";
import { OnPushComponent } from './components/changeDetection/on-push/on-push.component';


@Component({
  selector: 'app-root',
  imports: [DefaultComponent, OnPushComponent,RouterModule, RouterOutlet, NgforComponent, LifecycleHooksComponent, GetterSetterComponent, ChildParentComponent, CommonModule, DefaultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // apptitle = 'Angular Basics';
  // life='life';
  // counter: number=20;
  // newMessage: string='  hi Angular  ';
  // receivedDataFromChild='';

  // dataReceived(data: string){
  //   this.receivedDataFromChild=data;
  // }

  // private number: number=100;  //encapsulation

  // get counter(){
  //   return this.number;
  // }

  // set counter(value: number){
  //   this.number=value;
  // }

  // increment(){
  //   this.counter++;
  // }

  // decrement(){
  //   this.counter--;
  // } 


    // this.taskElements.changes.subscribe(()=>{
    //   console.log("child comp has changed");
    // });

    // setTimeout(()=>{
    //   this.tasks.push({id: (this.tasks.length+1), name: 'task 4'});
    // },4000);

    //--------Lazy loading-----------
    // flag: boolean=false;

    // LazyLoadComp: {
    //   new (): CardComponent | CounterComponent;
    // } | null = null;

    // ngOnInit(){
    //   this.getLazyLoad();
    // }
  
    // async getLazyLoad() {
    //   if (this.flag) {
    //     const { CardComponent } = await import( 
    //       './components/card/card.component'
    //     );
    //     this.LazyLoadComp = CardComponent;
    //   } else {
    //     const { CounterComponent } = await import(
    //       './components/counter/counter.component'
    //     );
    //     this.LazyLoadComp = CounterComponent;
    //   }
    // }


  }
import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

//import { NgFor } from '@angular/common';
//import { DataBindingComponent } from './components/data-binding/data-binding.component';
// import { SignalCompComponent } from "./components/signal-comp/signal-comp.component";
// import { ServiceReceipterComponent } from './components/service-receipter/service-receipter.component';
// import ManualComponent from './components/manual-comp';
// import { NgIfComponent } from './components/ng-if/ng-if.component';
// import { GetterSetterComponent } from './components/getter-setter/getter-setter.component';
// import { ChildParentComponent } from "./components/child-parent/child-parent.component";
import { HoverClickComponent } from './components/hover-click/hover-click.component';
// import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
//import { NgforComponent } from './components/directives/ngfor/ngfor.component';
// import { CardComponent } from './components/card/card.component';
// import { CounterComponent } from "./components/counter/counter.component";
// import { DefaultComponent } from "./components/changeDetection/default/default.component";
// import { OnPushComponent } from './components/changeDetection/on-push/on-push.component';
// import { PipesComponent } from './components/pipes/pipes.component';
// import { GreetPipe } from "./components/pipes/greet.pipe";
// import { ExponentPipe } from "./components/pipes/exponent.pipe";
//import { CricketerPipe } from "./components/pipes/cricketer.pipe";
import { CustomDirectiveComponent } from './components/directives/custom-directive/custom-directive.component';
import { PermissionDirective } from './components/directives/custom-directive/permission.directive';
import { PipesComponent } from './components/pipes/pipes.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { CounterComponent } from './components/counter/counter.component';
import { CardComponent } from './components/card/card.component';
import { DefaultComponent } from './components/changeDetection/default/default.component';
import { Parent1Component } from './parent-1/parent-1.component';
import { Parent2Component } from './parent-2/parent-2.component';
import { OnPushComponent } from "./components/changeDetection/on-push/on-push.component";

@Component({
  selector: 'app-root',
  imports: [
    HoverClickComponent,
    Parent1Component,
    Parent2Component,
    CustomDirectiveComponent,
    RouterOutlet,
    PipesComponent,
    DataBindingComponent,
    CounterComponent,
    DefaultComponent,
    OnPushComponent,
    CommonModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
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

  // --------Lazy loading-----------

  flag = false;

  LazyLoadComp: {
    new (): CardComponent | CounterComponent;
  } | null = null;

  ngOnInit() {
    debugger
    this.getLazyLoad();
  }

  async getLazyLoad() {
    if (this.flag) {debugger
      const  { CardComponent } = await import(
        './components/card/card.component'
      );
      this.LazyLoadComp = CardComponent;
    } else {debugger
      const { CounterComponent } = await import(
        './components/counter/counter.component'
      );
      this.LazyLoadComp = CounterComponent;
    }
  }

  fontSizePx = 16;
  inputValue: string = 'hello property binding in angular';
}

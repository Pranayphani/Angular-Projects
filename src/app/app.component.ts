import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { SignalCompComponent } from "./components/signal-comp/signal-comp.component";
import { ServiceReceipterComponent } from './components/service-receipter/service-receipter.component';
import ManualComponent from './components/manual-comp';
import { CounterComponent } from "./components/counter/counter.component";
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { GetterSetterComponent } from './components/getter-setter/getter-setter.component';


@Component({
  selector: 'app-root',
  imports: [GetterSetterComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  apptitle = 'firstProject';
  counter: number=20;
  newMessage: string='  hi Angular  ';
}

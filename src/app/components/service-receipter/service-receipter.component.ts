import { Component,inject } from '@angular/core';
import { Calculator } from '../services/service1';

@Component({
  selector: 'app-service-receipter',
  imports: [],
  templateUrl: './service-receipter.component.html',
  styleUrl: './service-receipter.component.css'
})
export class ServiceReceipterComponent {
  private calculator=inject(Calculator);
  totalCost=this.calculator.add(10,8);
}

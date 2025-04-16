import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-on-push',
  imports: [],
  templateUrl: './on-push.component.html',
  styleUrl: './on-push.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent {
  counter: number=0;

  constructor(private cdr: ChangeDetectorRef){
    setInterval(()=>{
      this.counter++;
      this.cdr.detectChanges();
    },2000);
  }
}

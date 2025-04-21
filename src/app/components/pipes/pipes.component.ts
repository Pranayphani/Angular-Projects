import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExponentPipe } from "./exponent.pipe";
import { CricketerPipe } from "./cricketer.pipe";

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, CricketerPipe, ExponentPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
    birthday=new Date();

    players: { name: string; isActive: boolean} []=[];

    addCricketer(player: string){
      // let players=[...this.players];
      // players.push({name: player, isActive: true});
      // this.players=players;

      this.players.push({name: player, isActive: false});
    }
}

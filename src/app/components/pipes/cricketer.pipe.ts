import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
   name: 'cricketer',
   standalone: true,
   pure: false
})

export class CricketerPipe implements PipeTransform{
   transform(players: {name: string, isActive: boolean}[]){
       return players.filter((player)=>player.isActive);
   }
}
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Calculator{
   add(x: number,y: number){
      return x+y;
   }
}

export function trimValue(value: string){
   return value.trim();
}

export function changeValue(value: number){
   return value*10;
}


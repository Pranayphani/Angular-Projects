import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
   standalone: true,
   name: 'exponent'
})

export class ExponentPipe implements PipeTransform{
   transform(value: number, param1: number): number {
       return value*param1;
   }
}
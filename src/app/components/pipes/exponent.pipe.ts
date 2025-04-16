import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
   standalone: true,
   name: 'exponent'
})

export class ExponentPipe implements PipeTransform{
   transform(value: number, exponent: number): number {
       return Math.pow(value,exponent);
   }
}
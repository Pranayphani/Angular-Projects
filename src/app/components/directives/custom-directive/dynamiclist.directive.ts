import { Directive, Input,TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
   selector: '[dynamiclistDir]'
})

export class DynamicListDirective{
   @Input() dynamiclistDir!: any[];

   constructor(
      private tempRef: TemplateRef<any>,
      private contRef: ViewContainerRef
   ){}

   ngOnInit(){
      this.contRef.clear();
      for(const player of this.dynamiclistDir){
         console.log(this.dynamiclistDir);
         console.log(player);
         const context={$player: player};
         console.log(context);
         this.contRef.createEmbeddedView(this.tempRef, context);
      }
   }
}
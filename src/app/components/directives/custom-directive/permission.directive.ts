import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';

@Directive({
   selector: '[appPermission]',
})
export class PermissionDirective implements OnInit {
   @Input('appPermission')
   checkAndStyle!: {
      permission: string;
      backColor: string;
   };

   constructor(
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef
   ) {}

   ngOnInit() {
      const hasPermission = this.checkAndStyle.permission === "yes";
      if (hasPermission) {
         // Create the embedded view
         const view = this.viewContainer.createEmbeddedView(this.templateRef);

         // Apply styling to the root element(s) of the embedded view
         view.rootNodes.forEach(node => {
            if (node instanceof HTMLElement) {
               node.style.backgroundColor = this.checkAndStyle.backColor;
            }
         });
      } else {
         // Clear the view if permission does not match
         this.viewContainer.clear();
      }
   }
}

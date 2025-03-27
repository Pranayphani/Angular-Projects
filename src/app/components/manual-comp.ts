import { Component } from "@angular/core";

@Component({
   standalone: true,
   selector: 'app-manual',
   template: '<h1>Custom Component</h1>',
   styles: ['h1 { color: green; background-color: yellow;}'],
})

export default class ManualComponent{
}

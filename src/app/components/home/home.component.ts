import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'comp-c',
  standalone: true,
  template: `
    <button>Button C</button>
  `  
})
export class CompC {}

@Component({
  selector: 'comp-b',
  standalone: true,
  imports: [CompC],
  template: `
    <button>Button B</button>
    <comp-c />
  `,
  styles: ` button { background-color: yellowgreen } `,
  encapsulation: ViewEncapsulation.ShadowDom

})
export class CompB {}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CompB],
  template: `
    <button>Home button</button>
    <comp-b />
  `,
  styles: '',
})
export class HomeComponent {

}

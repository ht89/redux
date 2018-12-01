import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app-state';

@Component({
  selector: 'app-root',
  template: `
    <app-counter></app-counter>

    <br />
    <br />
    <br />

    <app-jedi-list></app-jedi-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}

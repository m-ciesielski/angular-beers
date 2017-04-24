import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <app-beers></app-beers>
    `
})
export class AppComponent {
  title: 'Beer!';
}


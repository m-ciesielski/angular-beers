import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <app-header></app-header>
    <!--<nav>-->
      <!--<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>-->
      <!--<a routerLink="/beers" routerLinkActive="active">Beers</a>-->
    <!--</nav>-->
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
  title: 'Beer!';
}


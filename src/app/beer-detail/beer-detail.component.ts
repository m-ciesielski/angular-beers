import { Component, OnInit, Input } from '@angular/core';
import {Beer} from '../beer';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css'],
  template: `
    <div *ngIf="beer">
      <h2>{{beer.name}} details!</h2>
      <div><label>id: </label>{{beer.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="beer.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class BeerDetailComponent implements OnInit {
  @Input() beer: Beer;

  constructor() { }

  ngOnInit() {
  }

}

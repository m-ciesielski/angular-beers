import { Component, OnInit } from '@angular/core';
import {Brewery} from '../brewery';
import {BreweryService} from '../brewery.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-brewery-add',
  templateUrl: './brewery-add.component.html',
  styleUrls: ['./brewery-add.component.css']
})
export class BreweryAddComponent implements OnInit {
  model = new Brewery();
  constructor(private breweryService: BreweryService, private location: Location) { }

  ngOnInit() {
  }
  addBrewery() {
    this.breweryService.addBrewery(this.model);
    this.goBack();
  }
  // TODO: Add canDeactivate guard, so user cannot exit app using goBack method
  goBack(): void {
    this.location.back();
  }

}

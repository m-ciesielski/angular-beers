import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MdButtonModule, MdIconModule, MdInputModule, MdLineModule,
  MdListModule, MdMenuModule, MdSelectModule, MdToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './components/app/app.component';
import { BeerDetailComponent } from './components/beer-detail/beer-detail.component';
import {BeersComponent} from './components/beers/beers.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {BeerService} from './services/beer.service';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import {BreweryService} from './services/brewery.service';
import { BreweryDetailComponent } from './components/brewery-detail/brewery-detail.component';
import {BeerAddComponent} from './components/beer-add/beer-add.component';
import { BreweriesComponent } from './components/breweries/breweries.component';
import { BeerFilterPipe } from './pipes/beer-filter.pipe';
import { BreweryAddComponent } from './components/brewery-add/brewery-add.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {RatingModule} from 'ngx-rating';

@NgModule({
  declarations: [
    AppComponent,
    BeerDetailComponent,
    BeersComponent,
    DashboardComponent,
    HeaderComponent,
    BreweryDetailComponent,
    BeerAddComponent,
    BreweriesComponent,
    BeerFilterPipe,
    BreweryAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdMenuModule,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule,
    MdListModule,
    MdIconModule,
    MdSelectModule,
    MdLineModule,
    NgxPaginationModule,
    RatingModule
  ],
  providers: [BeerService, BreweryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

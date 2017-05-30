import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MdButtonModule, MdIconModule, MdInputModule, MdLineModule, MdListModule, MdMenuModule, MdSelectModule,
  MdToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import {BeersComponent} from './beers/beers.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BeerService} from './beer.service';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HeaderMenuBreweryComponent } from './header-menu-brewery/header-menu-brewery.component';
import {BreweryService} from './brewery.service';
import { BreweryDetailComponent } from './brewery-detail/brewery-detail.component';
import {BeerAddComponent} from './beer-add/beer-add.component';
import { BreweriesComponent } from './breweries/breweries.component';
import { BeerFilterPipe } from './pipes/beer-filter.pipe';
import { BreweryAddComponent } from './brewery-add/brewery-add.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    BeerDetailComponent,
    BeersComponent,
    DashboardComponent,
    HeaderComponent,
    HeaderMenuBreweryComponent,
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
    NgxPaginationModule
  ],
  providers: [BeerService, BreweryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

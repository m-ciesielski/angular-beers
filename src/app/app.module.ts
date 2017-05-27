import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MdButtonModule, MdIconModule, MdInputModule, MdListModule, MdMenuModule, MdSelectModule, MdSidenavModule,
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
import { BeerFormComponent } from './beer-form/beer-form.component';
import {BeerAddComponent} from './beer-add/beer-add.component';
import { BreweriesComponent } from './breweries/breweries.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerDetailComponent,
    BeersComponent,
    DashboardComponent,
    HeaderComponent,
    HeaderMenuBreweryComponent,
    BreweryDetailComponent,
    BeerFormComponent,
    BeerAddComponent,
    BreweriesComponent
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
    MdSelectModule
  ],
  providers: [BeerService, BreweryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

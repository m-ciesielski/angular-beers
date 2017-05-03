import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdButtonModule, MdMenuModule, MdSidenavModule, MdToolbarModule} from '@angular/material';
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

@NgModule({
  declarations: [
    AppComponent,
    BeerDetailComponent,
    BeersComponent,
    DashboardComponent,
    HeaderComponent,
    HeaderMenuBreweryComponent
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
    MdSidenavModule
  ],
  providers: [BeerService, BreweryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

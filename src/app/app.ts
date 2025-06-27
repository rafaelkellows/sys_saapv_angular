import { AfterViewInit, Component, Directive, input, QueryList, signal, OnInit, ViewChild } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { GoBackNavigation } from './go-back-navigation/go-back-navigation.component';
import { Header } from './header/header';
import { Dashboard } from './dashboard/dashboard';
import { User } from './user/user';
import { Product } from './product/product';
import { Order } from './order/order';
import { Config } from './config/config';
import { HousingLocation } from './housing-location/housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, GoBackNavigation, Header, Dashboard, User, Product, Order, Config, HousingLocation, RouterModule],
  template: `
    <main>
      <app-header></app-header>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'home';
  constructor(private location: Location) {  }

  goBack(): void {
    this.location.back();
  }
  

}


export class CustomListbox extends App {
  other = this.title;
  getInfos(): void {
    console.log('Service logic executed.');
  }
}

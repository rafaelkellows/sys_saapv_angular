import { Component } from '@angular/core';
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
  imports: [Header, Dashboard, User, Product, Order, Config, HousingLocation, RouterModule],
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
}
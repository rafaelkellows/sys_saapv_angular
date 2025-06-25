import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuNavigationInfo } from '../menu-navigation';
import { MenuNavigationService } from '../navigation.service';

@Component({
  selector: 'app-menu-navigation',
  imports: [CommonModule],
  template: `
    <ul class="itens-navigation">
      @for (item of menuNavigationList; track item.id) {
        <li><a href="{{ item.url }}">{{ item.title }}</a></li>
      } @empty {
        <li>No items found.</li>
      }
    </ul>
    <form>
      <input type="text" placeholder="Procurar no Sistema" />
      <button class="primary" type="button">Buscar</button>
    </form>
  `,
  styleUrls: ['./menu-navigation.css']
})
export class MenuNavigation {
  menuNavigationList: MenuNavigationInfo[] = [];
  menuNavigationService: MenuNavigationService = inject(MenuNavigationService);
  
  constructor() {
    this.menuNavigationList = this.menuNavigationService.getAllHousingLocations();
  }
  /*
  menuNavigationItem = input.required<MenuNavigationInfo>();
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  menuNavigationList: MenuNavigationInfo[] = [
    {
        id: 9999,
        title: 'Usuários v',
        status: true,
        url: `users`,
    },
    {
        id: 3,
        title: 'Produtos',
        status: true,
        url: `products`,
    },
    {
        id: 4,
        title: 'Pedidos',
        status: true,
        url: `orders`,
    }
  ]*/
}
import {Injectable} from '@angular/core';
import { MenuNavigationInfo } from './menu-navigation';
@Injectable({
  providedIn: 'root',
})
export class MenuNavigationService {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  protected menuNavigationList: MenuNavigationInfo[] = [
    {
        id: 0,
        title: 'Usuários',
        status: true,
        url: `users`,
    },
    {
        id: 1,
        title: 'Produtos',
        status: true,
        url: `products`,
    },
    {
        id: 2,
        title: 'Pedidos',
        status: true,
        url: `orders`,
    },
    {
        id: 3,
        title: 'Moradias',
        status: true,
        url: `houses`,
    },
    {
        id: 4,
        title: 'Configurações',
        status: true,
        url: `configs`,
    },
  ];
  getAllHousingLocations(): MenuNavigationInfo[] {
    return this.menuNavigationList;
  }
  getHousingLocationById(id: number): MenuNavigationInfo | undefined {
    return this.menuNavigationList.find((housingLocation) => housingLocation.id === id);
  }
}
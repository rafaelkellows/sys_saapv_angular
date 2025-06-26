import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Dashboard } from './dashboard/dashboard';
import { Details } from './details/details';
import { User } from './user/user';
import { Product } from './product/product';
import { Order } from './order/order';
import { Config } from './config/config';
import { ProductDetails } from './product/product-details';

const routeConfig: Routes = [
  {
    path: '',
    component: Dashboard,
    title: 'SAAPV - Início | Dashboard',
  },
  {
    path: 'houses',
    component: Home,
    title: 'SAAPV - Moradias',
  },
  {
    path: 'users',
    component: User,
    title: 'SAAPV - Usuários',
  },
  {
    path: 'products',
    component: Product,
    title: 'SAAPV - Produtos',
  },
  {
    path: 'products/details/:id',
    component: ProductDetails,
    title: 'SAAPV - Detalhes do Produto',
  },
  {
    path: 'orders',
    component: Order,
    title: 'SAAPV - Pedidos',
  },
  {
    path: 'configs',
    component: Config,
    title: 'SAAPV - Configurações',
  },
  {
    path: 'details/:id',
    component: Details,
    title: 'SAAPV - Detalhes',
  },
];
export default routeConfig;
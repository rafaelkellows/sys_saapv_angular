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
    title: 'Início | Dashboard',
  },
  {
    path: 'houses',
    component: Home,
    title: 'Moradias',
  },
  {
    path: 'users',
    component: User,
    title: 'Usuários',
  },
  {
    path: 'products',
    component: Product,
    title: 'Produtos',
  },
  {
    path: 'products/details/:id',
    component: ProductDetails,
    title: 'Detalhes do Produto',
  },
  {
    path: 'orders',
    component: Order,
    title: 'Pedidos',
  },
  {
    path: 'configs',
    component: Config,
    title: 'Configurações',
  },
  {
    path: 'details/:id',
    component: Details,
    title: 'Detalhes',
  },
];
export default routeConfig;
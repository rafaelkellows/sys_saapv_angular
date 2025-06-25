import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInterface } from './product.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterModule],
  template: `
      <tr>
        <td>{{ productList().id }}</td>
        <td>{{ productList().label }}</td>
        <td>{{ productList().title }}</td>
        <td>{{ productList().description }}</td>
        <td>{{ productList().price }}</td>
        <td class="admin">
          <a [routerLink]="['details', productList().id]">Editar</a>
          <a routerLink="/">Excluir</a>
        </td>
      </tr>
      <tr class="subitem">
        <td>SubItens</td>
        <td colspan=5>{{ productList().subProductsItens | json  }}</td>
      </tr>
  `,
  styleUrls: ['./product-list.css'],
})
export class ProductList {
  productList = input.required<ProductInterface>();
}

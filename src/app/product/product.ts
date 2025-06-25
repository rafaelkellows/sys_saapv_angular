import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInterface } from './product.interface';
import { ProductService } from './product.service';
import { ProductList } from './product.list';
@Component({
  selector: 'app-product',
  imports: [CommonModule, ProductList],
  template: `
    <section class="product-list">
      <h2>Produtos</h2>
      <p>Apresenta a listagem de todos os itens cadastrados no sistema. Nela, é possível visualizar detalhes como nome, categoria, preço, estoque e status. A interface permite adicionar, editar, remover ou desativar produtos, além de oferecer filtros e busca para facilitar o gerenciamento do catálogo.</p>
      <form>
        <input type="text" placeholder="Filter by title" (keyup)="filterResultsProd(filter.value)" #filter />
        <button class="primary" type="button" (click)="filterResultsProd(filter.value)">Buscar</button>
      </form>

      <table cellpadding="0" cellspacing="0">
        <tr>
          <td>ID</td>
          <td>Label</td>
          <td>Titulo</td>
          <td>Description</td>
          <td>Preço</td>
          <td>Administração</td>
        </tr>
        <app-product-list
          *ngFor="let prodItem of filteredProdList"
          [productList]="prodItem"
        ><tr></tr></app-product-list>
      </table>
    </section>
  `,
  styleUrls: ['./product.css'],
})
export class Product {
  prodList: ProductInterface[] = [];
  prodService: ProductService = inject(ProductService);
  filteredProdList: ProductInterface[] = [];

  constructor() {
    this.prodService
      .getAllProducts()
      .then((prodList: ProductInterface[]) => {
        this.prodList = prodList;
        this.filteredProdList = prodList;
      });
  }
  filterResultsProd(text: string) {
    if (!text) {
      this.filteredProdList = this.prodList;
      return;
    }
    this.filteredProdList = this.prodList.filter((productList) =>
      productList?.title.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
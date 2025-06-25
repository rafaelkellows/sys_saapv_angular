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
        <div class="radio-categories">
          <p>Filter by: </p>
          <input type="radio" name="cat" id="title" (click)="setCategoryPro('title')" checked /> 
          <label for="title">Título</label>
          <input type="radio" name="cat" id="desc" (click)="setCategoryPro('desc')" /> 
          <label for="desc">Description</label>
        </div>
        <input type="text" placeholder="Buscar por..." (keyup)="filterResultsProd(filter.value)" #filter />
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
        @for (item of filteredProdList; track item.id) {
          <app-product-list *ngFor="let prodItem of filteredProdList" [productList]="prodItem"></app-product-list>
        } @empty {
          <tr><td colspan="6" style="text-align:center">Nenhum item encontrado</td></tr>
        }
      </table>
    </section>
  `,
  styleUrls: ['./product.css'],
})
export class Product {
  prodList: ProductInterface[] = [];
  prodService: ProductService = inject(ProductService);
  filteredProdList: ProductInterface[] = [];
  prodCategory = "title";
  inputText = "";

  constructor() {
    this.prodService
      .getAllProducts()
      .then((prodList: ProductInterface[]) => {
        this.prodList = prodList;
        this.filteredProdList = prodList;
      });
  }
  filterResultsProd(text: string) {
    this.inputText = text;
    if (!text) {
      this.filteredProdList = this.prodList;
      return;
    }
    if (this.prodCategory == "title") {
      this.filteredProdList = this.prodList.filter((productList) =>
        productList?.title.toLowerCase().includes(text.toLowerCase()),
      );
    }else{
      this.filteredProdList = this.prodList.filter((productList) =>
        productList?.description.toLowerCase().includes(text.toLowerCase()),
      );
    }
    console.log(this.inputText);

  }
  setCategoryPro(text: string) {
    this.prodCategory = text;
    this.filterResultsProd(this.inputText);
  }
}
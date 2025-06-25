import { Injectable } from '@angular/core';
import { ProductInterface } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:3000/products';
  async getAllProducts(): Promise<ProductInterface[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getAllProductsById(id: number): Promise<ProductInterface | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    const locationJson = await data.json();
    return locationJson[0] ?? {};
  }
  submitApplicationProd(title: string, label: string, description: string) {
    // tslint:disable-next-line
    console.log(title, label, description);
  }
}
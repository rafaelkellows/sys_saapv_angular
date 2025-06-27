import { Component, inject } from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import { GoBackNavigation } from '../go-back-navigation/go-back-navigation.component';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from './product.service';
import { ProductInterface } from './product.interface';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, GoBackNavigation, ReactiveFormsModule],
  template: `
  <section class="product-details">
    
    <go-back-navigation></go-back-navigation>

    <h2 class="listing-heading">{{ housingLocation?.title }}</h2>
    <img
        class="product-details-photo"
        [src]="housingLocation?.imageUrl"
        alt="Exterior photo of {{ housingLocation?.title }}"
        crossorigin
      />
    <p><strong>Label:</strong> {{ housingLocation?.label }} <br><br> <strong>Description:</strong> {{ housingLocation?.description }} <br><br> Price: {{ housingLocation?.price | currency }}<br><br> Subitens: <br>{{ housingLocation?.subProductsItens | json  }}</p>
    
    <!--form [formGroup]="applyForm" (submit)="submitApplicationProd()">
      <label for="first-name">Title</label>
      <input id="first-name" type="text" formControlName="title" />
      <label for="last-name">Label</label>
      <input id="last-name" type="text" formControlName="label" />
      <label for="email">Description</label>
      <input id="email" type="text" formControlName="description" />
      <button type="submit" class="primary">Apply now</button>
    </form-->
  </section>
  `,
  styleUrls: ['./product-details.css'], 
})
export class ProductDetails {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(ProductService);
  housingLocation: ProductInterface | undefined;
  applyForm = new FormGroup({
    title: new FormControl(''),
    label: new FormControl(''),
    description: new FormControl(''),
  });
  constructor(private location: Location) {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getAllProductsById(housingLocationId).then((housingLocation) => {
      this.housingLocation = housingLocation;
    });
  }
  
  submitApplicationProd() {
    this.housingService.submitApplicationProd(
      this.applyForm.value.title ?? '',
      this.applyForm.value.label ?? '',
      this.applyForm.value.description ?? '',
    );
  }
  
  goBack(): void {
    this.location.back();
  }
}

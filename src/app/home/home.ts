import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoBackNavigation } from '../go-back-navigation/go-back-navigation.component';

import {HousingLocation} from '../housing-location/housing-location';
import {HousingLocationInfo} from '../housinglocation';
import {HousingService} from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, GoBackNavigation, HousingLocation],
  template: `
    <section class="home">
      <go-back-navigation></go-back-navigation>
      <h2>Moradias</h2>
      <p>Apresenta a listagem de todos os itens cadastrados no sistema. Nela, é possível visualizar detalhes como nome, categoria, preço, estoque e status. A interface permite adicionar, editar, remover ou desativar produtos, além de oferecer filtros e busca para facilitar o gerenciamento do catálogo.</p>
      <form>
        <input type="text" placeholder="Filter by city" (keyup)="filterResults(filter.value)" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.css'],
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocationInfo[] = [];
  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocationInfo[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
  
}
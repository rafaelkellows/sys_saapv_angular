import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuNavigation } from '../menu-navigation/menu-navigation';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MenuNavigation],
  template: `
    <header class="brand-name">
      <a href="/">
        <img class="brand-logo" src="#" alt="logo" aria-hidden="true" />
      </a>
      <app-menu-navigation></app-menu-navigation>
    </header>     
  `,
  styleUrls: ['./header.css'],
})
export class Header {
  
}
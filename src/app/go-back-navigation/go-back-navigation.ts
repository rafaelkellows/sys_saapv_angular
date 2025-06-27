import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoBackNavigation } from './go-back-navigation.component';
@Component({
  imports: [GoBackNavigation],
  template: `<go-back-navigation />`
})

export class UserProfile { }
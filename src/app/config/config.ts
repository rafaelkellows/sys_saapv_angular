import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoBackNavigation } from '../go-back-navigation/go-back-navigation.component';


@Component({
  selector: 'app-config',
  imports: [CommonModule, GoBackNavigation],
  template: `
    <section class="config">
      <go-back-navigation></go-back-navigation>
      <h2>Configurações</h2>
      <p>A página de configurações permite personalizar e ajustar as preferências do sistema de acordo com as necessidades do usuário ou da organização. Nela, é possível configurar opções como dados da conta, permissões de acesso, notificações, integrações, idioma, entre outras definições essenciais para o funcionamento do sistema.</p>
      
    </section>
  `,
  styleUrls: ['./config.css'],

})
export class Config { }

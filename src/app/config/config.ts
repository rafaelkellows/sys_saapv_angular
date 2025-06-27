import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';


@Component({
  selector: 'app-config',
  imports: [CommonModule],
  template: `
    <section class="config">
      <button class="go-back" (click)="goBack()">Voltar</button>
      <h2>Configurações</h2>
      <p>A página de configurações permite personalizar e ajustar as preferências do sistema de acordo com as necessidades do usuário ou da organização. Nela, é possível configurar opções como dados da conta, permissões de acesso, notificações, integrações, idioma, entre outras definições essenciais para o funcionamento do sistema.</p>
      
    </section>
  `,
  styleUrls: ['./config.css'],

})
export class Config {
 constructor(private location: Location) {}
 goBack(): void {
    this.location.back();
  }
}

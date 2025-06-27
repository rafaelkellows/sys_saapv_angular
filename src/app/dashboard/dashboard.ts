import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoBackNavigation } from '../go-back-navigation/go-back-navigation.component';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, GoBackNavigation],
  template: `
    <section class="dashboard">
      <go-back-navigation></go-back-navigation>

      <h2>Dashboard</h2>
      <h3>Bem vindo!</h3>
      <p>O dashboard é uma interface visual que reúne e exibe dados em tempo real de forma clara e objetiva. Ele permite o acompanhamento de métricas importantes por meio de gráficos, tabelas e indicadores visuais.</p>
      
      <div class="dashboard-list">
        <dl>
          <dt>Usuários</dt>
          <dd>
            <p>Exibe a lista de todos os usuários registrados no sistema. Nela, é possível visualizar informações básicas como nome, e-mail, perfil de acesso e status da conta. Também permite realizar ações administrativas, como adicionar, editar, desativar ou excluir usuários, além de aplicar filtros e buscas para facilitar a gestão.</p>
            <a href="users">Acessar</a>
          </dd>
        </dl>
        <dl>
          <dt>Produtos</dt>
          <dd>
            <p>Apresenta a listagem de todos os itens cadastrados no sistema. Nela, é possível visualizar detalhes como nome, categoria, preço, estoque e status. A interface permite adicionar, editar, remover ou desativar produtos, além de oferecer filtros e busca para facilitar o gerenciamento do catálogo.</p>
            <a href="products">Acessar</a>
          </dd>
        </dl>
        <dl>
          <dt>Pedidos</dt>
          <dd>
            <p>Exibe o histórico e o status de todas as solicitações realizadas no sistema. Cada pedido inclui informações como cliente, data, itens comprados, valor total e situação (em andamento, concluído, cancelado, etc.). A página permite acompanhar o andamento dos pedidos, realizar buscas, aplicar filtros e acessar detalhes individuais para gestão e atendimento eficiente.</p>
            <a href="orders">Acessar</a>
          </dd>
        </dl>
        <dl>
          <dt>Moradias</dt>
          <dd>
            <p>Apresenta a listagem de todos os itens cadastrados no sistema. Nela, é possível visualizar detalhes como nome, categoria, preço, estoque e status. A interface permite adicionar, editar, remover ou desativar produtos, além de oferecer filtros e busca para facilitar o gerenciamento do catálogo.</p>
            <a href="houses">Acessar</a>
          </dd>
        </dl>
        <dl>
          <dt>Configurações</dt>
          <dd>
            <p>A página de configurações permite personalizar e ajustar as preferências do sistema de acordo com as necessidades do usuário ou da organização. Nela, é possível configurar opções como dados da conta, permissões de acesso, notificações, integrações, idioma, entre outras definições essenciais para o funcionamento do sistema.</p>
            <a href="configs">Acessar</a>
          </dd>
        </dl>
      </div>
    </section>
  `,
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {
  /*
  constructor(private location: Location) {  }
  goBack(): void {
    this.location.back();
  }
  
  constructor(private myService: App) {
    this.myService.getInfos();
  }*/

}




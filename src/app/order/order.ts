import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoBackNavigation } from '../go-back-navigation/go-back-navigation.component';


@Component({
  selector: 'app-order',
  imports: [CommonModule, GoBackNavigation],
  template: `
    <section class="order-list">
      <go-back-navigation></go-back-navigation>
      <h2>Pedidos</h2>
      <p>Exibe o histórico e o status de todas as solicitações realizadas no sistema. Cada pedido inclui informações como cliente, data, itens comprados, valor total e situação (em andamento, concluído, cancelado, etc.). A página permite acompanhar o andamento dos pedidos, realizar buscas, aplicar filtros e acessar detalhes individuais para gestão e atendimento eficiente.</p>
      <form>
        <input type="text" placeholder="Filtro seus resultados" />
        <button class="primary" type="button">Buscar</button>
      </form>

      <table cellpadding="0" cellspacing="0">
        <tr>
          <td>Nº Pedido</td>
          <td>Nome</td>
          <td>Tempo Estimado</td>
          <td>Status</td>
        </tr>
        <tr>
          <td>0115454</td>
          <td>
            <ul>
              <li>2 churros</li>
              <li>3 coxinha</li>
              <li>2 hamburguer</li>
              <li>2 coca lata</li>
            </ul>
          </td>
          <td>10:40:06</td>
          <td>Aguardando</td>
        </tr>       
        <tr>
          <td>5454</td>
          <td>
            <ul>
              <li>2 churros</li>
              <li>3 coxinha</li>
              <li>2 hamburguer</li>
              <li>2 coca lata</li>
            </ul>
          </td>
          <td>25:40:06</td>
          <td>Feito</td>
        </tr>       
        <tr>
          <td>540654</td>
          <td>
            <ul>
              <li>2 churros</li>
              <li>3 coxinha</li>
              <li>2 hamburguer</li>
              <li>2 coca lata</li>
            </ul>
          </td>
          <td>5:35:06</td>
          <td>Aguardando</td>
        </tr>       
      </table>
    </section>
  `,
  styleUrls: ['./order.css'],

})
export class Order { }

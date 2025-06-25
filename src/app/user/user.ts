import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfos } from './user.interface';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  template: `
    <section class="user-list">
      <h2>Usuários</h2>
      <p>Exibe a lista de todos os usuários registrados no sistema. Nela, é possível visualizar informações básicas como nome, e-mail, perfil de acesso e status da conta. Também permite realizar ações administrativas, como adicionar, editar, desativar ou excluir usuários, além de aplicar filtros e buscas para facilitar a gestão.</p>
      <form>
        <input type="text" placeholder="Filtro seus resultados" #filter />
        <button class="primary" type="button">Buscar</button>
      </form>
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td>ID</td>
          <td>Nome</td>
          <td>Função</td>
          <td>Status</td>
          <td>Inserido</td>
          <td>Atualizado</td>
        </tr>
        @for (item of userList; track item.id) {
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.position }}</td>
            @if (item.status) {
              <td>Ativo</td>
            }
            @else {
              <td>Inativo</td>
            }
            <td>{{ item.inserted_at }}</td>
            <td>{{ item.updated_at }}</td>
          </tr>
        } @empty {
          <tr>
            <td colspan="6">Nenhum item encontrado.</td>
          </tr>
        }
        
      </table>
    </section>
  `,
  styleUrls: ['./user.css'],
})
export class User {
  userList: UserInfos[] = [];
  userService: UserService = inject(UserService);
  filteredLocationList: UserInfos[] = [];
  constructor() {
    this.userService
      .getAllUserInfos()
      .then((userList: UserInfos[]) => {
        this.userList = userList;
        this.filteredLocationList = userList;
      });
  }
}

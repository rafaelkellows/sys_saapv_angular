import { Injectable } from '@angular/core';
import { UserInfos } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/users';
  async getAllUserInfos(): Promise<UserInfos[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  constructor() { }
}

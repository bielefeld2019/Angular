import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: any[] = [
    {id: 1, nome: 'Lucas Bielefeldt',  email: 'lucas@gmail.com', data_nasc: '28/04/2002'},
    {id: 2, nome: 'Marcio Weyh',  email: 'marcio@gmail.com', data_nasc: '15/11/2001'},
    {id: 3, nome: 'Jhonata Amboni',  email: 'jhonata@gmail.com', data_nasc: '29/12/2001'},
    {id: 4, nome: 'Isadora Locks',  email: 'isadora@gmail.com', data_nasc: '10/11/2002'},
    {id: 5, nome: 'Leticia Garcia',  email: 'leticia@gmail.com', data_nasc: '08/06/2001'}

  ];

  getUsers(){
    return this.users;
  }

  getUser(id: number){
    for (let i=0; i<this.users.length; i++){
      let user = this.users[i];
      if (user.id == id){
        return user;
      }
    }
    return null;
  }
  constructor() { }
}

import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  private users:any[] =[];
  
  title_user = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('LISTA DE USUÁRIOS'), 1000)
  });

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
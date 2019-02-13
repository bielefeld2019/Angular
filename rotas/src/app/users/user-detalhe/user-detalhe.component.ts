import { UserService } from './../user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-detalhe',
  templateUrl: './user-detalhe.component.html',
  styleUrls: ['./user-detalhe.component.css']
})
export class UserDetalheComponent implements OnInit {

  id:number;
  user:any;
  inscricao: Subscription;

  constructor(
    private route:ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.user = this.userService.getUser(id);
      });

  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
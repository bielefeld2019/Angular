import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit, OnDestroy {
  
  id:number;
  produto:any;
  inscricao: Subscription;

  constructor(
    private route:ActivatedRoute,
    private produtosService: ProdutosService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.produto = this.produtosService.getProduto(id);
      });

  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}

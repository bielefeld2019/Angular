import { CategoriasService } from './../categorias.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categoria-detalhe',
  templateUrl: './categoria-detalhe.component.html',
  styleUrls: ['./categoria-detalhe.component.css']
})
export class CategoriaDetalheComponent implements OnInit {

  id:number;
  categoria:any;
  inscricao: Subscription;

  constructor(
    private route:ActivatedRoute,
    private categoriasService: CategoriasService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.categoria = this.categoriasService.getCategoria(id);
      });

  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}

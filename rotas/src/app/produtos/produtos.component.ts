import { ProdutosService } from './produtos.service';
import { Component, OnInit } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  private produtos:any[] =[];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtos = this.produtosService.getProdutos();
  }

}

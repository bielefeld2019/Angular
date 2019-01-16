import { ProdutosService } from './produtos.service';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutosComponent } from './produtos.component';

@NgModule({
  declarations: [ProdutosComponent, ProdutoDetalheComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    BrowserModule
  ],
  providers: [ProdutosService]

})
export class ProdutosModule { }

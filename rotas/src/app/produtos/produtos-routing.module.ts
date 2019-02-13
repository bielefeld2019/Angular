import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos.component';


const  produtosRoutes = [
  { path: 'produtos', component: ProdutosComponent, children: [
  { path: ':id', component: ProdutoDetalheComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(produtosRoutes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }

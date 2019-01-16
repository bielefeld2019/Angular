import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos.component';


const  alunosRoutes = [
  { path: 'produtos', component: ProdutosComponent, children: [
  { path: ':id', component: ProdutoDetalheComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }

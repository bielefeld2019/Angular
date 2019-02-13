import { CategoriaDetalheComponent } from './categoria-detalhe/categoria-detalhe.component';
import { CategoriasComponent } from './categorias.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


const  categoriaRoutes = [
  { path: 'categorias', component: CategoriasComponent, children: [
  { path: ':id', component: CategoriaDetalheComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(categoriaRoutes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }

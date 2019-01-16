import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';


const alunosRoutes: Routes = [
  { path: 'alunos', component: AlunosComponent, children: [
    { path: ':id', component: AlunoDetalheComponent}
  ] },
  
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})

export class AlunosRoutingModule { }

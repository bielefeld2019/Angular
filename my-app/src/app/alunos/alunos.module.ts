import { AlunosRoutingModule } from './alunos.module.routing';
import { AlunosService } from './alunos.service';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AlunosComponent, AlunoDetalheComponent],
  imports: [
    CommonModule,
    AlunosModule,
    AlunosRoutingModule
  ],
  providers: [AlunosService]
})
export class AlunosModule { }

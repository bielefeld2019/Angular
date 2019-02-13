import { CategoriasService } from './categorias.service';
import { CategoriasComponent } from './categorias.component';
import { CategoriaDetalheComponent } from './categoria-detalhe/categoria-detalhe.component';
import { CategoriaRoutingModule } from './categorias-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CategoriaDetalheComponent, CategoriasComponent],
  imports: [
    CommonModule,
    BrowserModule,
    CategoriaRoutingModule
  ],
  providers: [CategoriasService]
})
export class CategoriasModule { }

import { UserModule } from './users/user.module';
import { UserRoutingModule } from './users/user-routing.module';
import { CategoriaRoutingModule } from './categorias/categorias-routing.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ProdutosRoutingModule } from './produtos/produtos-routing.module';
import { ProdutosModule } from './produtos/produtos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutosModule,
    ProdutosRoutingModule,
    CategoriasModule,
    CategoriaRoutingModule,
    UserRoutingModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

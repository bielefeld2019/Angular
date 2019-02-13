import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private categorias: any[] = [
    {id: 1, nome: 'Eletrônicos'},
    {id: 2, nome: 'Roupas'},
    {id: 3, nome: 'Utensílios'},
    {id: 4, nome: 'Casa'},
  ];

  getCategorias(){
    return this.categorias;
  }

  getCategoria(id: number){
    for (let i=0; i<this.categorias.length; i++){
      let categoria = this.categorias[i];
      if (categoria.id == id){
        return categoria;
      }
    }
    return null;
  }
  constructor() { }
}


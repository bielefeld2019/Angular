import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private produtos: any[] = [
    {id: 1, nome: 'Notebook',  descricao: 'HP', categoria: 'Eletrônicos', qnt: 2},
    {id: 2, nome: 'MacBook',  descricao: 'Apple', categoria: 'Eletrônicos', qnt: 1},
    {id: 4, nome: 'Smartphone',  descricao: 'Motorola', categoria: 'Eletrônicos', qnt: 7},
    {id: 5, nome: 'Celular',  descricao: 'Nokia', categoria: 'Eletrônicos', qnt: 12},
    {id: 6, nome: 'Camisa',  descricao: 'Supreme', categoria: 'Roupas', qnt: 22},
    {id: 7, nome: 'Calça',  descricao: 'Preta', categoria: 'Roupas', qnt: 18},
    {id: 8, nome: 'Moletom', descricao: 'Camuflado', categoria: 'Roupas', qnt: 31},
    {id: 8, nome: 'Garrafa',  descricao: '2 Litros', categoria: 'Pet', qnt: 11}


  ];

  getProdutos(){
    return this.produtos;
  }

  getProduto(id: number){
    for (let i=0; i<this.produtos.length; i++){
      let produto = this.produtos[i];
      if (produto.id == id){
        return produto;
      }
    }
    return null;
  }
  constructor() { }
}

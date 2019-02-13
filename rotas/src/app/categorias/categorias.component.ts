import { CategoriasService } from './categorias.service';
import { Component, OnInit } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  private categorias:any[] =[];

  title_cat = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('LISTA DE CATEGORIAS'), 1000)
  });


  constructor(private categoriasService: CategoriasService) { 
  }

  ngOnInit() {
    this.categorias = this.categoriasService.getCategorias();

  }

}

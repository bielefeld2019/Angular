
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  test: string[] = []; 

  mostrarTest: boolean = false;
  mostrar1: boolean = false;
  valor: number = 0;
  nomes: string[] = ['Borracha', 'Lápis', 'Apontador']; 


  constructor() { }

  ngOnInit() {

  }

  OnMostrarTest(){
    this.mostrarTest = !this.mostrarTest;
  }

  OnMostrar1(){
    this.mostrar1 = !this.mostrar1;
  }

  OnMostrarMais(){
   this.valor ==this.valor ++; 
  }
  
  OnMostrarMenos(){
    this.valor ==this.valor --; 
   }
  
}

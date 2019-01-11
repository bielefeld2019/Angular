import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  test: string[] = []; 
  mostrarTest: boolean = false;
  mostrar1: boolean = false;
  valor: number = 0;

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

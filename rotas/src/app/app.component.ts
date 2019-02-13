import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rotas';
  aba:string = 'home';
  data_hora: string;

  constructor() { 
    setInterval(() => {
      let currentDate = new Date();
      this.data_hora = currentDate.toDateString() + '  |  ' + currentDate.toLocaleTimeString();
    }, 1000);
  }
}

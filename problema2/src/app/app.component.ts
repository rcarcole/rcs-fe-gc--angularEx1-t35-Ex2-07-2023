import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'problema2';
  numero1: number = 0;
  numero2: number = 0;
  suma: number = 0;
  
  ngOnInit() {
    this.generarNumerosAleatorios();
  }
  
  generarNumerosAleatorios() {
    this.numero1 = Math.floor(Math.random() * 10);
    this.numero2 = Math.floor(Math.random() * 10);
    this.suma = this.numero1 + this.numero2;
  }
}

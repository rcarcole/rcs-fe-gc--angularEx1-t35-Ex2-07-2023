import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  numero1: number = 0;
numero2: number = 0;
suma: number = 0;
 

  constructor() {}

  ngOnInit(): void {
    this.generarNumerosAleatorios();
  }

  generarNumerosAleatorios(): void {
    this.numero1 = Math.floor(Math.random() * 10);
    this.numero2 = Math.floor(Math.random() * 10);
    this.suma = this.numero1 + this.numero2;
  }
}

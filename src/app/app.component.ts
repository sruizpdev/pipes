import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Capitán América';
  arreglo = [1,2,3,4,5,6,7,8];
  PI: number = Math.PI;
  porcentaje:number = 0.234;
  salario:number= 1234.5;
  heroe={
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }
}

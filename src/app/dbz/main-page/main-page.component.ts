import { Component, Input } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
// import '../interfaces/dbz.interface'


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  nuevo: Personajes = {
    nombre: 'Maestro Roshi',
    poder: 900,
  };

  personajes:Personajes[] = [
  {
    nombre:'Krilin',
    poder: 800,
  },
  {
    nombre:'Goku',
    poder: 14500,
  }
];

  agregarNuevoPersonaje(personaje:Personajes){
    // console.log(personaje);
    this.personajes.push(personaje);
  }



}

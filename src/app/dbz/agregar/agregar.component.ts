import { Component, Input } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})

export class AgregarComponent {

  @Input() personajes:Personajes[] = [];

  @Input() nuevo: Personajes = {
    nombre: 'TETE',
    poder: 100,
  }

  agregar() {

    if (this.nuevo.nombre.trim().length === 0) { return; }

    console.log(this.nuevo);
    // this.peronajes.push(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    }



  }


}

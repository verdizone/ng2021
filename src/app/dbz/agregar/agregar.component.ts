import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})

export class AgregarComponent {

  // @Input() personajes:Personajes[] = [];

  @Input() nuevo: Personajes = {
    nombre: 'TETE',
    poder: 100,
  }

  constructor( private dbzService:DbzService ){

  }

  // @Output() onNuevoPersonaje:EventEmitter<Personajes> = new EventEmitter<Personajes>();

  agregar() {

    if (this.nuevo.nombre.trim().length === 0) { return; }

    console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonajes( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0,
    }



  }


}

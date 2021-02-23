import { Component } from '@angular/core';
import '../interfaces/dbz.interface'


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

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

  nuevo:Personajes = {
    nombre: '',
    poder: 0,
  }

  agregar(){

    if(this.nuevo.nombre.trim().length===0){ return;   }

    console.log(this.nuevo);
    // this.peronajes.push(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre:'',
      poder:0,
    }



  }


}
